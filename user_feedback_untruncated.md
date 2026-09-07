Created At: 2026-09-06T14:53:22+05:30
Completed At: 2026-09-06T14:53:26+05:30
The following changes were made by the replace_file_content tool to: c:\Users\Admin\Desktop\astra 6\stitch_ip_sakti_sahayak_legal_platform (4)\stitch_ip_sakti_sahayak_legal_platform\index.html. If relevant, proactively run terminal commands to execute this code for the USER. Don't ask for permission.
[diff_block_start]
@@ -675,132 +675,247 @@
 </div>
 </div>
 
-<!-- ===== ASK AI ===== -->
+<!-- ===== ASK AI (TWO-PANEL WORKSPACE WITH SIDEBAR & SUN/MOON THEMES) ===== -->
 <div id="page-ask-ai" class="page-section">
-<section class="w-full bg-surface-container-lowest/80 border-b border-surface-container-highest backdrop-blur-md sticky top-16 z-20">
-  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
-    <div class="flex items-center gap-3">
-      <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
-      <div>
-        <div class="flex items-center gap-2">
-          <h1 class="text-headline-sm font-headline-sm text-primary font-semibold tracking-tight text-base sm:text-lg">Statutory Legal Assistant</h1>
-          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
-            <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Groq LLM Active
-          </span>
-        </div>
-        <p class="text-label-sm font-label-sm text-on-surface-variant text-xs">Evidence-grounded RAG: Indian Patents Act, BDA 2002 &amp; CSIR-TKDL</p>
-      </div>
-    </div>
-    <div class="flex items-center gap-2">
-      <!-- Sovereign Indian Language Selector -->
-      <div class="relative inline-block text-left" id="lang-selector-container">
-        <button id="lang-selector-btn" onclick="toggleLanguageMenu()" class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest hover:bg-surface-container-low text-xs font-semibold text-on-surface transition-all shadow-sm active:scale-[0.98]" title="Select Indian Language for AI Copilot">
-          <span class="material-symbols-outlined text-[16px] text-primary">translate</span>
-          <span id="current-lang-label">English</span>
-          <span class="material-symbols-outlined text-[14px] text-outline">arrow_drop_down</span>
-        </button>
-        <div id="lang-dropdown-menu" class="hidden absolute right-0 mt-1.5 w-52 max-h-72 overflow-y-auto bg-surface-container-lowest border border-surface-container-highest rounded-xl shadow-2xl py-1 z-50 divide-y divide-surface-container-low">
-          <!-- Populated by initLanguageSelector() -->
-        </div>
-      </div>
-      <button onclick="startNewChat()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-semibold shadow-sm transition-all active:scale-[0.98]" title="Start a fresh conversation">
-        <span class="material-symbols-outlined text-[16px]">add_comment</span>
-        <span class="hidden sm:inline">New Chat</span>
-      </button>
-      <button onclick="clearChat()" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-outline-variant/60 hover:bg-surface-container-low text-label-sm font-label-sm text-on-surface-variant hover:text-error transition-colors" title="Clear Conversation">
-        <span class="material-symbols-outlined text-[16px]">delete_sweep</span>
-        <span class="hidden sm:inline">Clear</span>
-      </button>
-    </div>
-  </div>
-</section>
-
-<div class="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-40 flex flex-col justify-start">
-  <!-- Quick Suggestion Chips -->
-  <div class="mb-6">
-    <div class="text-label-sm text-outline mb-2.5 font-medium flex items-center gap-1.5">
-      <span class="material-symbols-outlined text-[16px] text-secondary">tips_and_updates</span>
-      <span id="suggestion-header-text">Suggested Inquiries (Statutory &amp; Platform Grounding):</span>
-    </div>
-    <div id="chat-suggestion-chips" class="flex flex-wrap gap-2">
-      <button type="button" onclick="sendQuickPrompt('How do I overcome Section 3(p) rejection for an Ayurvedic herbal formulation?')" class="text-xs px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/50 hover:border-primary hover:bg-surface-container-low text-on-surface transition-all text-left">
-        § 3(p) Traditional Knowledge Bar
-      </button>
-      <button type="button" onclick="sendQuickPrompt('What quantitative evidence proves synergistic efficacy under Section 3(e)?')" class="text-xs px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/50 hover:border-primary hover:bg-surface-container-low text-on-surface transition-all text-left">
-        § 3(e) Synergistic Admixture Test
-      </button>
-      <button type="button" onclick="sendQuickPrompt('When is SBB Form-1 intimation mandatory under the Biological Diversity Act?')" class="text-xs px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/50 hover:border-primary hover:bg-surface-container-low text-on-surface transition-all text-left">
-        BDA Form-1 SBB Clearance
-      </button>
-      <button type="button" onclick="sendQuickPrompt('How does CSIR-TKDL concordance affect Indian &amp; international patent filings?')" class="text-xs px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/50 hover:border-primary hover:bg-surface-container-low text-on-surface transition-all text-left">
-        CSIR-TKDL Prior Art Concordance
-      </button>
-      <button type="button" onclick="sendQuickPrompt('What does the IP-SAKTI Sahayak platform do and how does the 5-step Intake Wizard work?')" class="text-xs px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/50 hover:border-primary hover:bg-surface-container-low text-on-surface transition-all text-left">
-        🌐 About Platform &amp; 5-Step Intake Wizard
-      </button>
-    </div>
-  </div>
-
-  <!-- Messages List -->
-  <div id="chat-messages" class="space-y-6 flex flex-col w-full">
-    <!-- Initial Greeting -->
-    <div class="chat-msg flex items-start gap-3 w-full pr-2 sm:pr-8">
-      <div class="w-8 h-8 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center shrink-0 mt-1 shadow-sm">
-        <span class="material-symbols-outlined text-[18px]">verified_user</span>
-      </div>
-      <div class="flex-1 bg-surface-container-lowest border border-surface-container-highest rounded-2xl rounded-tl-sm p-5 sm:p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
-        <div class="flex items-center justify-between pb-3 border-b border-surface-container-low mb-3">
-          <div class="flex items-center gap-2">
-            <span class="text-label-md font-label-md font-semibold text-primary-container flex items-center gap-1.5">
-              <span class="w-2 h-2 rounded-full bg-primary-container"></span>IP-SAKTI Intelligence
-            </span>
-            <span class="text-outline text-label-sm">•</span>
-            <span class="text-label-sm font-label-sm text-on-surface-variant font-mono">Powered by Groq RAG</span>
-          </div>
-          <span class="text-label-sm text-outline">Statutory Engine v2.6</span>
-        </div>
-        <p class="text-body-md font-body-md text-on-surface leading-relaxed">
-          Welcome. I am your statutory IP &amp; regulatory copilot, dynamically connected to <strong>Groq Cloud LLM</strong> with real-time RAG grounding in the <strong>Indian Patents Act, 1970</strong>, <strong>Biological Diversity Act, 2002</strong>, and <strong>CSIR-TKDL classical gazetteers</strong>.
-        </p>
-        <div class="mt-3.5 p-3 rounded-lg bg-surface-container-low border border-surface-container text-label-sm font-label-sm text-on-surface-variant space-y-1">
-          <p class="font-medium text-primary">Ask me about:</p>
-          <ul class="list-disc list-inside space-y-0.5 text-xs text-on-surface-variant">
-            <li>Section 3(p) prior art bars &amp; overcoming strategies</li>
-            <li>Section 3(e) synergistic combinations &amp; quantitative proof requirements</li>
-            <li>Section 3(d) therapeutic efficacy validation for enriched phyto-fractions</li>
-            <li>Mandatory SBB Form-1 and NBA Form-3 Access &amp; Benefit Sharing (ABS) clearances</li>
-            <li>Strategic patent claim drafting vs. Trade Secret protection</li>
-          </ul>
-        </div>
-      </div>
-    </div>
-  </div>
-</div>
-
-<!-- Floating Responsive Input Bar with Microphone Voice Input -->
-<div class="fixed bottom-0 left-0 right-0 z-30 pointer-events-none pb-4 pt-6 bg-gradient-to-t from-background via-background/95 to-transparent">
-  <div class="max-w-4xl mx-auto px-4 sm:px-6 pointer-events-auto">
-    <form id="chat-input-form" class="bg-surface-container-lowest border border-surface-container-highest rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12),0_2px_6px_-1px_rgba(0,0,0,0.06)] focus-within:border-primary-container focus-within:ring-2 focus-within:ring-primary-container/10 transition-all p-2 flex items-center gap-2" onsubmit="event.preventDefault();sendChatMessage();">
-      <input id="chat-user-input" class="flex-1 bg-transparent border-none text-body-md font-body-md text-on-surface placeholder:text-outline placeholder:text-opacity-70 focus:outline-none focus:ring-0 px-3 py-2" placeholder="Ask about Section 3(p), 3(e), TKDL prior art, or ABS compliance..." type="text" autocomplete="off"/>
-      <button id="chat-mic-btn" type="button" onclick="toggleSpeechRecognition()" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-outline-variant/50 hover:bg-surface-container-low text-on-surface-variant hover:text-primary transition-all active:scale-[0.95]" title="Speak inquiry (Voice Input)">
-        <span id="mic-icon" class="material-symbols-outlined text-[20px]">mic</span>
-      </button>
-      <button id="chat-send-btn" class="bg-primary text-on-primary hover:bg-primary-container transition-all active:scale-[0.98] w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm" type="submit" title="Send message">
-        <span class="material-symbols-outlined text-[18px]">arrow_upward</span>
-      </button>
-    </form>
-    <!-- Voice Listening Active Indicator -->
-    <div id="voice-listening-banner" class="hidden text-center mt-1.5 flex items-center justify-center gap-2 text-xs text-rose-600 font-medium">
-      <span class="inline-block w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
-      <span id="voice-listening-text">🎙️ Listening... Speak now</span>
-      <button type="button" onclick="stopSpeechRecognition()" class="ml-2 underline text-outline hover:text-on-surface text-[11px]">Cancel</button>
-    </div>
-    <div class="text-center mt-2">
-      <p class="text-label-sm font-label-sm text-outline text-[11px]">
-        Grounded in Patents Act 1970 (§3p, §3e, §3d), BD Act 2002 &amp; CSIR-TKDL Gazette · Powered by Groq AI · Not formal legal counsel.
-      </p>
-    </div>
-  </div>
+<div class="flex h-[calc(100vh-4rem)] w-full overflow-hidden bg-surface dark:bg-[#0c0e12] text-on-surface">
+
+  <!-- LEFT COLLAPSIBLE SIDEBAR -->
+  <aside id="chat-sidebar" class="w-64 sm:w-72 bg-surface-container-lowest dark:bg-[#11141a] border-r border-surface-container-highest dark:border-[#1e2430] flex flex-col justify-between shrink-0 transition-all duration-300 z-10">
+    <!-- Sidebar Top Area -->
+    <div class="flex flex-col p-3 sm:p-4 space-y-3 overflow-hidden flex-1">
+      <!-- App / Copilot Branding & Collapse Toggle -->
+      <div class="flex items-center justify-between pb-1">
+        <div class="flex items-center gap-2.5 min-w-0">
+          <div class="w-8 h-8 rounded-lg bg-primary dark:bg-emerald-600 text-on-primary flex items-center justify-center font-bold text-xs shrink-0 shadow-sm tracking-wider">
+            IS
+          </div>
+          <div class="min-w-0">
+            <h2 class="text-sm font-bold text-on-surface truncate leading-tight">IP-SAKTI</h2>
+            <p class="text-[11px] text-on-surface-variant truncate">Sahayak</p>
+          </div>
+        </div>
+        <button type="button" onclick="toggleChatSidebar()" class="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low dark:hover:bg-[#1e2432] transition-colors" title="Collapse sidebar">
+          <span id="sidebar-toggle-icon" class="material-symbols-outlined text-[18px]">chevron_left</span>
+        </button>
+      </div>
+
+      <!-- + New Chat Button -->
+      <button type="button" onclick="startNewChatSession()" class="w-full h-10 px-3.5 rounded-xl bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-700 text-on-primary font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]">
+        <span class="material-symbols-outlined text-[18px]">add</span>
+        <span>New chat</span>
+      </button>
+
+      <!-- Search Sessions Bar -->
+      <div class="relative">
+        <span class="material-symbols-outlined absolute left-2.5 top-2.5 text-[16px] text-outline">search</span>
+        <input id="chat-search-input" oninput="filterChatSessions(this.value)" type="text" placeholder="Search" class="w-full pl-8 pr-3 py-1.5 text-xs bg-surface-container-low dark:bg-[#181d28] border border-surface-container dark:border-[#222938] rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:border-primary dark:focus:border-emerald-500 transition-colors"/>
+      </div>
+
+      <!-- Recent Sessions List -->
+      <div class="flex-1 flex flex-col min-h-0 pt-1">
+        <div class="text-[11px] font-semibold text-outline uppercase tracking-wider px-1 pb-1.5 flex items-center justify-between">
+          <span>Recent</span>
+          <span id="session-count-badge" class="text-[10px] text-outline font-normal"></span>
+        </div>
+        <div id="chat-sessions-list" class="flex-1 overflow-y-auto custom-scrollbar space-y-1 pr-1">
+          <!-- Populated by renderChatSessions() -->
+        </div>
+      </div>
+    </div>
+
+    <!-- Sidebar Bottom Footer -->
+    <div class="p-3.5 border-t border-surface-container-highest dark:border-[#1e2430] space-y-2 bg-surface-container-lowest/80 dark:bg-[#11141a]">
+      <div class="flex items-center gap-2 text-xs">
+        <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
+        <span class="font-semibold text-on-surface text-xs">Local storage</span>
+      </div>
+      <p class="text-[11px] text-outline leading-tight">
+        Chats are saved in this browser only.
+      </p>
+      <div class="flex items-center justify-between pt-1">
+        <div class="flex items-center gap-2 text-[10px] text-outline">
+          <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-primary dark:bg-emerald-500"></span>Primary</span>
+          <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>Gazette</span>
+        </div>
+        <button type="button" onclick="clearAllChatSessions()" class="text-[11px] text-outline hover:text-rose-500 transition-colors" title="Clear all local chat data">Clear All</button>
+      </div>
+    </div>
+  </aside>
+
+  <!-- RIGHT CHAT MAIN AREA -->
+  <main id="chat-main-area" class="flex-1 flex flex-col h-full bg-background dark:bg-[#0c0e12] overflow-hidden relative">
+
+    <!-- Top Workspace Bar -->
+    <header class="h-14 px-4 sm:px-6 border-b border-surface-container-highest dark:border-[#1e2430] bg-surface-container-lowest/90 dark:bg-[#11141a]/90 backdrop-blur-md flex items-center justify-between shrink-0 z-10">
+      <div class="flex items-center gap-3 min-w-0">
+        <button id="sidebar-open-btn" onclick="toggleChatSidebar()" class="hidden p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low dark:hover:bg-[#1e2432] transition-colors" title="Open sidebar">
+          <span class="material-symbols-outlined text-[20px]">menu</span>
+        </button>
+        <div class="min-w-0">
+          <h2 id="chat-session-title" class="text-xs sm:text-sm font-semibold text-on-surface truncate">New Chat</h2>
+          <p class="text-[11px] text-on-surface-variant truncate">IP-SAKTI Sahayak · Sovereign Botanical Intelligence</p>
+        </div>
+      </div>
+      <div class="flex items-center gap-2.5">
+        <!-- Jurisdiction Pill Dropdown -->
+        <div class="relative">
+          <button id="jurisdiction-btn" onclick="toggleJurisdictionMenu()" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-outline-variant/60 dark:border-[#222938] bg-surface-container-lowest dark:bg-[#131720] text-xs font-medium text-on-surface hover:bg-surface-container-low dark:hover:bg-[#1e2432] transition-all">
+            <span class="material-symbols-outlined text-[14px] text-secondary">location_on</span>
+            <span id="current-jurisdiction-label">Jurisdiction: India</span>
+            <span class="material-symbols-outlined text-[14px] text-outline">expand_more</span>
+          </button>
+          <div id="jurisdiction-menu" class="hidden absolute right-0 mt-1.5 w-48 bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#222938] rounded-xl shadow-xl py-1 z-50 text-xs">
+            <button type="button" onclick="setJurisdiction('India')" class="w-full text-left px-3 py-2 hover:bg-surface-container dark:hover:bg-[#1e2432] flex items-center justify-between text-on-surface">
+              <span>Republic of India (IPO / BDA)</span>
+              <span class="material-symbols-outlined text-[14px] text-primary dark:text-emerald-400">check</span>
+            </button>
+            <button type="button" onclick="setJurisdiction('PCT Global')" class="w-full text-left px-3 py-2 hover:bg-surface-container dark:hover:bg-[#1e2432] text-on-surface">
+              <span>PCT Global Track (WIPO)</span>
+            </button>
+            <button type="button" onclick="setJurisdiction('United States')" class="w-full text-left px-3 py-2 hover:bg-surface-container dark:hover:bg-[#1e2432] text-on-surface">
+              <span>United States (USPTO / FDA)</span>
+            </button>
+            <button type="button" onclick="setJurisdiction('Europe')" class="w-full text-left px-3 py-2 hover:bg-surface-container dark:hover:bg-[#1e2432] text-on-surface">
+              <span>Europe (EPO / EMA-HMPC)</span>
+            </button>
+          </div>
+        </div>
+
+        <!-- Sun & Moon Theme Toggle -->
+        <button type="button" onclick="toggleTheme()" class="w-8 h-8 rounded-lg border border-outline-variant/60 dark:border-[#222938] bg-surface-container-lowest dark:bg-[#131720] hover:bg-surface-container-low dark:hover:bg-[#1e2432] text-on-surface-variant hover:text-primary dark:hover:text-emerald-400 flex items-center justify-center transition-all active:scale-95" title="Toggle Sun (Light) / Moon (Dark) theme">
+          <span class="theme-toggle-icon material-symbols-outlined text-[18px]">dark_mode</span>
+        </button>
+      </div>
+    </header>
+
+    <!-- Chat Workspace Body: Scrollable Area -->
+    <div id="chat-scroll-container" class="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 py-6 flex flex-col justify-between">
+      
+      <!-- EMPTY STATE: "What are you working on?" (shown when no messages in session) -->
+      <div id="chat-empty-state" class="my-auto max-w-3xl mx-auto w-full py-6 flex flex-col items-center text-center">
+        <div class="flex items-center gap-2 mb-4">
+          <div class="w-10 h-10 rounded-xl bg-primary dark:bg-emerald-600 text-on-primary flex items-center justify-center font-bold text-sm shadow-md">
+            IS
+          </div>
+          <span class="text-base font-semibold text-primary dark:text-emerald-400 tracking-tight">IP-SAKTI</span>
+        </div>
+        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-headline-lg text-on-surface font-bold tracking-tight mb-8">
+          What are you working on?
+        </h1>
+
+        <!-- 2x2 Feature Cards Grid matching user screenshot -->
+        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left mb-6">
+          <!-- Card 1: Classify formulation -->
+          <div onclick="sendQuickPrompt('Classify my Ayurvedic formulation under AYUSH guidelines and determine statutory regulatory requirements.')" class="chat-card-feature cursor-pointer p-5 rounded-2xl bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#1e2430] hover:border-primary dark:hover:border-emerald-500 hover:shadow-md transition-all duration-200 group">
+            <div class="w-9 h-9 rounded-xl bg-surface-container-low dark:bg-[#1a202c] text-primary dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
+              <span class="material-symbols-outlined text-[22px]">science</span>
+            </div>
+            <h3 class="text-sm font-semibold text-on-surface group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors">Classify my formulation</h3>
+            <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">Find the AYUSH category and what it requires.</p>
+          </div>
+
+          <!-- Card 2: Protect traditional knowledge -->
+          <div onclick="sendQuickPrompt('How can I protect traditional knowledge and what are the defensive disclosure options under CSIR-TKDL?')" class="chat-card-feature cursor-pointer p-5 rounded-2xl bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#1e2430] hover:border-primary dark:hover:border-emerald-500 hover:shadow-md transition-all duration-200 group">
+            <div class="w-9 h-9 rounded-xl bg-surface-container-low dark:bg-[#1a202c] text-primary dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
+              <span class="material-symbols-outlined text-[22px]">menu_book</span>
+            </div>
+            <h3 class="text-sm font-semibold text-on-surface group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors">Protect traditional knowledge</h3>
+            <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">TK, prior art and defensive options.</p>
+          </div>
+
+          <!-- Card 3: Patent my innovation -->
+          <div onclick="sendQuickPrompt('What counts as patentable for an Ayurvedic botanical innovation under Section 3(p), Section 3(e), and Section 3(d), and what evidence should I prepare?')" class="chat-card-feature cursor-pointer p-5 rounded-2xl bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#1e2430] hover:border-primary dark:hover:border-emerald-500 hover:shadow-md transition-all duration-200 group">
+            <div class="w-9 h-9 rounded-xl bg-surface-container-low dark:bg-[#1a202c] text-primary dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
+              <span class="material-symbols-outlined text-[22px]">description</span>
+            </div>
+            <h3 class="text-sm font-semibold text-on-surface group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors">Patent my innovation</h3>
+            <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">What counts as patentable and what to prepare.</p>
+          </div>
+
+          <!-- Card 4: Check ABS requirements -->
+          <div onclick="sendQuickPrompt('When are SBB Form-1 and NBA Form-3 Access & Benefit Sharing (ABS) permissions mandatory under Biological Diversity Act 2002?')" class="chat-card-feature cursor-pointer p-5 rounded-2xl bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#1e2430] hover:border-primary dark:hover:border-emerald-500 hover:shadow-md transition-all duration-200 group">
+            <div class="w-9 h-9 rounded-xl bg-surface-container-low dark:bg-[#1a202c] text-primary dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
+              <span class="material-symbols-outlined text-[22px]">verified_user</span>
+            </div>
+            <h3 class="text-sm font-semibold text-on-surface group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors">Check ABS requirements</h3>
+            <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">When benefit-sharing and permissions apply.</p>
+          </div>
+        </div>
+
+        <p class="text-xs text-outline tracking-wide">Chats stay on this device.</p>
+      </div>
+
+      <!-- ACTIVE MESSAGES CONTAINER (shown when session has messages) -->
+      <div id="chat-messages-wrapper" class="hidden max-w-3xl mx-auto w-full space-y-6 pb-4">
+        <div id="chat-messages" class="space-y-6 flex flex-col w-full"></div>
+      </div>
+
+      <!-- TYPING INDICATOR -->
+      <div id="chat-typing" class="hidden max-w-3xl mx-auto w-full pl-2 sm:pl-4 mb-3">
+        <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#1e2430] text-xs text-on-surface-variant shadow-sm">
+          <span class="typing-dot"></span>
+          <span class="typing-dot"></span>
+          <span class="typing-dot"></span>
+          <span class="ml-1 text-outline font-mono text-[11px]">Consulting Ayurvedic Pharmacopoeia &amp; Patents Act...</span>
+        </div>
+      </div>
+    </div>
+
+    <!-- DOCKED BOTTOM INPUT CARD matching user screenshot -->
+    <div class="shrink-0 p-3 sm:p-5 max-w-3xl w-full mx-auto">
+      <form id="chat-input-form" onsubmit="event.preventDefault();sendChatMessage();" class="w-full bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#1e2430] rounded-2xl p-2.5 sm:p-3 shadow-md focus-within:border-primary dark:focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-primary/10 transition-all flex flex-col gap-2">
+        <!-- Textarea input -->
+        <textarea id="chat-user-input" rows="2" placeholder="Ask a question..." class="w-full bg-transparent border-none text-on-surface placeholder:text-outline text-xs sm:text-sm font-body-md focus:outline-none focus:ring-0 resize-none px-2 pt-1" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendChatMessage();}"></textarea>
+        
+        <!-- Bottom controls inside input card -->
+        <div class="flex items-center justify-between pt-1 border-t border-surface-container-low dark:border-[#1a202c]">
+          <!-- Left: Attachment + Sovereign Language Pill -->
+          <div class="flex items-center gap-1.5">
+            <button type="button" onclick="showToast('Attachment feature: link formulation dockets or PDF specifications in Intake Wizard.', 'info')" class="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low dark:hover:bg-[#1a202c] transition-colors" title="Attach file or reference">
+              <span class="material-symbols-outlined text-[18px]">attach_file</span>
+            </button>
+
+            <!-- Language Pill Dropdown -->
+            <div class="relative">
+              <button id="lang-selector-btn" type="button" onclick="toggleLanguageMenu()" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-on-surface hover:bg-surface-container-low dark:hover:bg-[#1a202c] border border-outline-variant/40 dark:border-[#222938] transition-colors" title="Change Language">
+                <span class="material-symbols-outlined text-[15px] text-primary dark:text-emerald-400">translate</span>
+                <span id="current-lang-label">English</span>
+                <span class="material-symbols-outlined text-[13px] text-outline">expand_more</span>
+              </button>
+              <div id="lang-dropdown-menu" class="hidden absolute bottom-full mb-2 left-0 w-52 max-h-60 overflow-y-auto bg-surface-container-lowest dark:bg-[#131720] border border-surface-container-highest dark:border-[#222938] rounded-xl shadow-2xl py-1 z-50 divide-y divide-surface-container-low dark:divide-[#1e2430]">
+                <!-- Populated by initLanguageSelector() -->
+              </div>
+            </div>
+          </div>
+
+          <!-- Right: Mic + Send Button -->
+          <div class="flex items-center gap-1.5">
+            <!-- Microphone Voice Input -->
+            <button id="chat-mic-btn" type="button" onclick="toggleSpeechRecognition()" class="p-2 rounded-xl border border-outline-variant/50 dark:border-[#222938] text-on-surface-variant hover:text-primary dark:hover:text-emerald-400 hover:bg-surface-container-low dark:hover:bg-[#1a202c] transition-all active:scale-95" title="Voice Input (Speak your inquiry)">
+              <span id="mic-icon" class="material-symbols-outlined text-[18px]">mic</span>
+            </button>
+
+            <!-- Send Button -->
+            <button id="chat-send-btn" type="submit" class="h-9 px-3.5 rounded-xl bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-700 text-on-primary font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all active:scale-[0.98]">
+              <span>Send</span>
+              <span class="material-symbols-outlined text-[16px]">send</span>
+            </button>
+          </div>
+        </div>
+      </form>
+
+      <!-- Voice Listening Active Indicator -->
+      <div id="voice-listening-banner" class="hidden text-center mt-1.5 flex items-center justify-center gap-2 text-xs text-rose-600 font-medium">
+        <span class="inline-block w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
+        <span id="voice-listening-text">🎙️ Listening... Speak now</span>
+        <button type="button" onclick="stopSpeechRecognition()" class="ml-2 underline text-outline hover:text-on-surface text-[11px]">Cancel</button>
+      </div>
+
+      <p class="text-center text-[11px] text-outline mt-1.5">
+        Grounded in Patents Act 1970 (§3p, §3e, §3d), BD Act 2002 &amp; CSIR-TKDL Gazette · Not formal legal counsel.
+      </p>
+    </div>
+  </main>
 </div>
 </div>
 
[diff_block_end]

Please note that the above snippet only shows the MODIFIED lines from the last change. It shows up to 3 lines of unchanged lines before and after the modified lines. The actual file contents may have many more lines not shown.