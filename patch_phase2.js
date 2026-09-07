// patch_phase2.js
const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// =========================================================================
// 1. UPDATE renderDossiers() and renderMyCases() in JS
// =========================================================================
const renderDossiersOld = `function renderDossiers() {
  const grid = document.getElementById('dossiersGrid');
  if (!grid || showingEmpty) return;
  const statusColors = {
    'Ready for Filing': 'bg-primary-fixed text-on-primary-fixed border-primary-fixed-dim/40',
    'Review Recommended': 'bg-secondary-container/20 text-on-secondary-container border-secondary-container/40',
    'Prior-Art Clear': 'bg-surface-container-high text-on-surface-variant border-outline-variant/50',
    'Draft': 'bg-surface-container text-on-surface-variant border-outline-variant/40'
  };
  const dotColors = {'Ready for Filing':'bg-primary-container','Review Recommended':'bg-secondary','Prior-Art Clear':'bg-outline','Draft':'bg-outline-variant'};
  grid.innerHTML = appState.dossiers.map(d => \`
    <div onclick="navigate('\${d.route||'tkdl'}')" class="cursor-pointer bg-surface-container-lowest rounded-2xl border border-surface-container p-7 elevation-ambient hover:elevation-hover transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div class="flex items-start justify-between gap-3 mb-4">
          <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2.5 py-1 rounded-full border border-surface-container">ID: \${d.id}</span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-sm text-label-sm \${statusColors[d.status]||statusColors['Draft']}"><span class="w-1.5 h-1.5 rounded-full \${dotColors[d.status]||'bg-outline'}"></span>\${d.status}</span>
        </div>
        <h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary-container transition-colors duration-150 font-medium tracking-tight">\${d.name}</h2>
        <p class="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-2">\${d.desc}</p>
        <div class="mt-5 pt-4 border-t border-surface-container-low flex flex-wrap gap-2">\${d.tags.map(t=>\`<span class="font-label-sm text-label-sm text-on-surface-variant bg-surface px-2 py-0.5 rounded border border-surface-container">\${t}</span>\`).join('')}</div>
      </div>
      <div class="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
        <span class="font-label-sm text-label-sm text-on-surface-variant">Updated \${d.updated}</span>
        <span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container font-medium group-hover:translate-x-0.5 transition-transform duration-150">Open Dossier <span class="material-symbols-outlined text-[18px]">arrow_forward</span></span>
      </div>
    </div>\`).join('');
  // Update count
  const countEl = grid.closest('.page-section')?.querySelector('.font-medium.text-on-surface');
  if(countEl) countEl.textContent = \`\${appState.dossiers.length} active formulations\`;
}`;

const renderDossiersNew = `function renderDossiers() {
  const grid = document.getElementById('dossiersGrid');
  if (!grid || showingEmpty) return;
  
  const isCompany = (currentRole === 'company');
  const items = isCompany 
    ? (appState.companyProducts || DEFAULT_STATE.companyProducts)
    : (appState.userDossiers || DEFAULT_STATE.userDossiers);

  const statusColors = {
    'Ready for Filing': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'Review Recommended': 'bg-amber-50 text-amber-800 border-amber-200',
    'Prior-Art Clear': 'bg-blue-50 text-blue-800 border-blue-200',
    'Draft': 'bg-surface-container text-on-surface-variant border-outline-variant/40',
    'Form-1 SBB Approved': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'NBA Form-3 Pending': 'bg-amber-50 text-amber-800 border-amber-200',
    'CT-06 Phase II Cleared': 'bg-purple-50 text-purple-800 border-purple-200',
    'Section 3(e) Cleared': 'bg-teal-50 text-teal-800 border-teal-200'
  };

  grid.innerHTML = items.map(d => \`
    <div onclick="navigate('\${isCompany ? 'company-products' : (d.route || 'tkdl')}')" class="cursor-pointer bg-surface-container-lowest rounded-2xl border border-surface-container p-7 elevation-ambient hover:elevation-hover transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div class="flex items-start justify-between gap-3 mb-4">
          <span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2.5 py-1 rounded-full border border-surface-container font-mono">
            \${isCompany ? 'BATCH: ' + (d.batch || d.id) : 'ID: ' + d.id}
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-sm text-label-sm border \${statusColors[d.status] || 'bg-surface-container text-on-surface-variant'}">
            <span class="w-1.5 h-1.5 rounded-full \${d.status && (d.status.includes('Approved') || d.status.includes('Clear') || d.status.includes('Ready') || d.status.includes('Passed')) ? 'bg-emerald-600' : 'bg-amber-600'}"></span>
            \${d.status}
          </span>
        </div>
        <h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-150 font-medium tracking-tight">
          \${d.name}
        </h2>
        <p class="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
          \${d.desc}
        </p>
        <div class="mt-5 pt-4 border-t border-surface-container-low flex flex-wrap gap-1.5">
          \${(d.tags || []).map(t => \`<span class="font-label-sm text-[11px] text-on-surface-variant bg-surface px-2 py-0.5 rounded border border-surface-container">\${t}</span>\`).join('')}
        </div>
      </div>
      <div class="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
        <span class="font-label-sm text-label-sm text-on-surface-variant">
          \${isCompany && d.marketRevenue ? \`<strong class="text-primary font-semibold">\${d.marketRevenue}</strong>\` : \`Updated \${d.updated}\`}
        </span>
        <span class="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container font-medium group-hover:translate-x-0.5 transition-transform duration-150">
          <span>\${isCompany ? 'Open Product Passport' : 'Open Dossier'}</span>
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </span>
      </div>
    </div>\`).join('');

  const countEl = grid.closest('.page-section')?.querySelector('.font-medium.text-on-surface');
  if (countEl) {
    countEl.textContent = isCompany ? \`\${items.length} Commercial Products\` : \`\${items.length} Active Formulations\`;
  }
}

function renderMyCases() {
  const container = document.getElementById('mycases-list');
  if (!container) return;
  
  const isCompany = (currentRole === 'company');
  const cases = isCompany 
    ? (appState.companyCases || DEFAULT_STATE.companyCases)
    : (appState.userCases || DEFAULT_STATE.userCases);
  
  // Update header text in results-view-mycases
  const headerTitle = document.querySelector('#results-view-mycases h1');
  const headerDesc = document.querySelector('#results-view-mycases p');
  if (headerTitle) {
    headerTitle.textContent = isCompany ? 'Company Legal Cases & Regulatory Audits' : 'My Cases & Consultations';
  }
  if (headerDesc) {
    headerDesc.textContent = isCompany
      ? 'Review enterprise patent strategies, SBB Form-1 compliance intimations, and export clearance advisories from Adv. Bandi Mahendra.'
      : 'Review active legal advisories from Adv. Bandi Mahendra, botanical safety audits, and saved AI research queries.';
  }

  // Render cards
  container.innerHTML = cases.map(c => \`
    <div class="mycase-item bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="\${c.category}" data-status="\${c.status}">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1 \${
            c.statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' :
            c.statusColor === 'blue' ? 'bg-blue-100 text-blue-900 border border-blue-200' :
            'bg-amber-100 text-amber-900 border border-amber-200'
          }">
            <span class="w-1.5 h-1.5 rounded-full \${
              c.statusColor === 'emerald' ? 'bg-emerald-600' :
              c.statusColor === 'blue' ? 'bg-blue-600' :
              'bg-amber-600 animate-pulse'
            }"></span>
            \${c.statusLabel}
          </span>
          <span class="text-xs text-on-surface-variant font-mono">Case #\${c.id}</span>
        </div>
        <div>
          <h3 class="text-base font-semibold text-primary">\${c.title}</h3>
          <p class="text-xs text-on-surface-variant mt-1">
            \${isCompany ? \`Entity: <strong class="text-on-surface">\${c.entity}</strong> (Lead: \${c.applicant})\` : \`Applicant: <strong class="text-on-surface">\${c.applicant}</strong> (\${c.entity})\`}
            • Assigned: <span class="font-medium text-primary">\${c.counsel}</span>
          </p>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed line-clamp-3 bg-surface-container-low/60 p-3 rounded-lg border border-outline-variant/30">
          \${c.summary}
        </p>
      </div>
      <div class="mt-5 pt-4 border-t border-outline-variant/40 flex items-center justify-between">
        <span class="text-[11px] text-on-surface-variant flex items-center gap-1">
          <span class="material-symbols-outlined text-[14px]">schedule</span>
          \${c.sla}
        </span>
        <button onclick="\${isCompany ? \`openCompanyCaseDetail('\${c.id}')\` : \`openUserCaseDetail('\${c.id}')\`}" class="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container border border-outline-variant text-xs font-medium text-primary flex items-center gap-1 cursor-pointer transition-colors">
          <span>View Thread</span>
          <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
    </div>
  \`).join('');
}`;

if (html.includes(renderDossiersOld)) {
  html = html.replace(renderDossiersOld, renderDossiersNew);
  console.log('renderDossiers and renderMyCases replaced successfully');
} else {
  console.error('Could not find renderDossiersOld');
}

// Clear the hardcoded content inside results-view-mycases #mycases-list
const myCasesListRegex = /<div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="mycases-list">[\s\S]*?<\/div>(\s*<\/div>\s*<\/div>\s*<!-- TAB)/;
if (myCasesListRegex.test(html)) {
  html = html.replace(myCasesListRegex, `<div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="mycases-list">
      <!-- Populated dynamically by renderMyCases() -->
    </div>
  </div>
  <!-- TAB`);
  console.log('Cleared hardcoded mycases list HTML');
} else {
  console.warn('Regex for mycases-list did not match, trying alternative');
  const mycasesIdx = html.indexOf('id="mycases-list"');
  if (mycasesIdx !== -1) {
    const endIdx = html.indexOf('<!-- TAB 2: EVIDENCE', mycasesIdx);
    console.log('Found mycases-list between', mycasesIdx, 'and', endIdx);
  }
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Phase 2 script 1 completed');
