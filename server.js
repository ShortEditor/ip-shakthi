const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function serveFile(res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  // Normalize request URL
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // API config route for environment variables
  if (pathname === '/api/config') {
    let groqKey = process.env.GROQ_API_KEY || '';
    let groqModel = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';
    const envPath = path.join(ROOT_DIR, '.env');
    if (fs.existsSync(envPath)) {
      try {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const keyMatch = envContent.match(/^GROQ_API_KEY\s*=\s*["']?([^\r\n"']+)["']?/m);
        if (keyMatch) groqKey = keyMatch[1].trim();
        const modelMatch = envContent.match(/^GROQ_MODEL\s*=\s*["']?([^\r\n"']+)["']?/m);
        if (modelMatch) groqModel = modelMatch[1].trim();
      } catch (e) {
        console.warn('Could not read .env file:', e.message);
      }
    }
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    res.end(JSON.stringify({ apiKey: groqKey, model: groqModel }));
    return;
  }

  // If path is root or directory, point to index.html
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Safe path resolution inside ROOT_DIR
  const safePath = path.normalize(path.join(ROOT_DIR, pathname));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      serveFile(res, path.join(safePath, 'index.html'));
    } else {
      serveFile(res, safePath);
    }
  });
});

function startServer(port) {
  server.listen(port, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(`🚀 IP-SAKTI Sahayak Prototype Server is running!`);
    console.log(`📡 Localhost:   http://localhost:${port}`);
    console.log(`📡 Network:     http://127.0.0.1:${port}`);
    console.log(`📂 Serving:     ${ROOT_DIR}`);
    console.log(`======================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} in use, attempting port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);
