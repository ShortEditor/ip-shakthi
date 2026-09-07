// build_full_suite.js - Script to generate and patch all required sections into index.html
const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// =============================================
// 1. UPDATE DEFAULT_STATE
// =============================================
const defaultStateOld = `const DEFAULT_STATE = {
  dossiers: [
    {id:'AYU-7821',name:'Ashwagandha Vitality Elixir',status:'Ready for Filing',desc:'Standardized withanolide glycoside extract matrix. Botanical reference: Withania somnifera root extract.',tags:['Novel Excipient','IPO Section 3(p) Cleared'],updated:'2 days ago',route:'tkdl'},
    {id:'AYU-6340',name:'Triphala Digestive Tonic',status:'Review Recommended',desc:'Synergistic bio-fermented tridoshic blend consisting of Haritaki, Bibhitaki, and Amalaki aqueous decoctions.',tags:['Citation Match Flagged','TKDL Prior Art v1.8'],updated:'4 hours ago',route:'abs'},
    {id:'AYU-9014',name:'Curcumin Bio-Enhanced Extract',status:'Prior-Art Clear',desc:'Liposomal encapsulation of 95% curcuminoids complex with black pepper piperine alkaloid co-carrier.',tags:['PCT Global Ready','USPTO Class 424'],updated:'5 days ago',route:'escalation'}
  ],`;

const defaultStateNew = `const DEFAULT_STATE = {
  dossiers: [
    {id:'AYU-7821',name:'Ashwagandha Vitality Elixir',status:'Ready for Filing',desc:'Standardized withanolide glycoside extract matrix. Botanical reference: Withania somnifera root extract.',tags:['Novel Excipient','IPO Section 3(p) Cleared','Researcher: Dr. Hema'],updated:'2 days ago',route:'tkdl',botanical:'Withania somnifera',part:'Root Extract',marker:'Withanolides 5.2%'},
    {id:'AYU-6340',name:'Triphala Digestive Tonic',status:'Review Recommended',desc:'Synergistic bio-fermented tridoshic blend consisting of Haritaki, Bibhitaki, and Amalaki aqueous decoctions.',tags:['Citation Match Flagged','TKDL Prior Art v1.8','Practitioner: Shivani'],updated:'4 hours ago',route:'abs',botanical:'Terminalia chebula, Terminalia bellirica, Phyllanthus emblica',part:'Pericarp / Dried Fruit',marker:'Tannins & Gallic Acid 45%'},
    {id:'AYU-3120',name:'Brahmi Medhya Rasayana',status:'Draft',desc:'Classical Medhya formulation optimized for cognitive vitality, neuro-protection, and stress resilience with ghee lipid carrier.',tags:['Classical Formulation','Researcher: Naga Ganesh'],updated:'Yesterday',route:'intake-2',botanical:'Bacopa monnieri',part:'Whole Herb',marker:'Bacosides A & B 22%'},
    {id:'AYU-9014',name:'Curcumin Bio-Enhanced Extract',status:'Prior-Art Clear',desc:'Liposomal encapsulation of 95% curcuminoids complex with black pepper piperine alkaloid co-carrier.',tags:['PCT Global Ready','USPTO Class 424','Researcher: Dr. Hema'],updated:'5 days ago',route:'escalation',botanical:'Curcuma longa + Piper nigrum',part:'Rhizome + Dried Berries',marker:'Curcuminoids 95% + Piperine 98%'}
  ],
  userDossiers: [
    {id:'AYU-7821',name:'Ashwagandha Vitality Elixir',status:'Ready for Filing',desc:'Standardized withanolide glycoside extract matrix. Botanical reference: Withania somnifera root extract.',tags:['Novel Excipient','IPO Section 3(p) Cleared','Researcher: Dr. Hema'],updated:'2 days ago',route:'tkdl',botanical:'Withania somnifera',part:'Root Extract',marker:'Withanolides 5.2%'},
    {id:'AYU-6340',name:'Triphala Digestive Tonic',status:'Review Recommended',desc:'Synergistic bio-fermented tridoshic blend consisting of Haritaki, Bibhitaki, and Amalaki aqueous decoctions.',tags:['Citation Match Flagged','TKDL Prior Art v1.8','Practitioner: Shivani'],updated:'4 hours ago',route:'abs',botanical:'Terminalia chebula, Terminalia bellirica, Phyllanthus emblica',part:'Pericarp / Dried Fruit',marker:'Tannins & Gallic Acid 45%'},
    {id:'AYU-3120',name:'Brahmi Medhya Rasayana',status:'Draft',desc:'Classical Medhya formulation optimized for cognitive vitality, neuro-protection, and stress resilience with ghee lipid carrier.',tags:['Classical Formulation','Researcher: Naga Ganesh'],updated:'Yesterday',route:'intake-2',botanical:'Bacopa monnieri',part:'Whole Herb',marker:'Bacosides A & B 22%'},
    {id:'AYU-9014',name:'Curcumin Bio-Enhanced Extract',status:'Prior-Art Clear',desc:'Liposomal encapsulation of 95% curcuminoids complex with black pepper piperine alkaloid co-carrier.',tags:['PCT Global Ready','USPTO Class 424','Researcher: Dr. Hema'],updated:'5 days ago',route:'escalation',botanical:'Curcuma longa + Piper nigrum',part:'Rhizome + Dried Berries',marker:'Curcuminoids 95% + Piperine 98%'}
  ],
  companyProducts: [
    {id:'PROD-AVB-402',name:'NirogShakti Synergistic Capsule',status:'Form-1 SBB Approved',desc:'Commercial scale high-yield phyto-extract formulation (Curcuminoids 95% + Withanolides 5% + Piperine 98%). Batch run: 50,000 units/month.',tags:['Enterprise: AyurVeda Biotech','Batch: 50k units/mo','IPO App: 202411048219','Lead: Kundan'],updated:'Today, 11:30 IST',route:'company-products',batch:'AVB-402-B4',category:'Proprietary Ayurvedic Medicine',license:'AYUR-MH-2021-994',marketRevenue:'₹14.8 Cr (IN) / $2.4M (US)',confidence:'94%'},
    {id:'PROD-HB-901',name:'CurcuShield Phyto-Extract Nano-Emulsion',status:'NBA Form-3 Pending',desc:'Standardized self-emulsifying curcuminoid phospholipid matrix designed for international export. Complies with US FDA DSHEA & EU EMA Herbal monographs.',tags:['Enterprise: Himalayan Botanicals','Export Grade Q3','US/EU Technical File','Lead: Sumanth'],updated:'Yesterday',route:'company-products',batch:'HB-901-B2',category:'Phytopharmaceutical Export',license:'AYUR-HP-2019-410',marketRevenue:'$3.8M Global ARR',confidence:'88%'},
    {id:'PROD-AVB-510',name:'MadhuMukt Glycemic Regulator',status:'CT-06 Phase II Cleared',desc:'Proprietary Ayurvedic co-extract of Pterocarpus marsupium (Vijayasar) & Syzygium cumini (Jamun seed). Complete double-blind clinical trial validation.',tags:['Enterprise: AyurVeda Biotech','Clinical Phase II Passed','TM Class 5 Registered','Lead: Kundan'],updated:'3 days ago',route:'company-products',batch:'AVB-510-B1',category:'Ayurvedic Proprietary Medicine',license:'AYUR-MH-2021-994',marketRevenue:'₹8.5 Cr Domestic ARR',confidence:'91%'},
    {id:'PROD-HB-304',name:'RespiClear Bronchial Herbal Syrup',status:'Section 3(e) Cleared',desc:'Adhatoda vasica (Vasaka) + Solanum xanthocarpum (Kantakari) bioactive syrup. Quantitatively proven synergistic bronchodilator efficacy.',tags:['Enterprise: Himalayan Botanicals','Schedule T GMP Certified','UK MHRA THR Ready','Lead: Sumanth'],updated:'1 week ago',route:'company-products',batch:'HB-304-B3',category:'Ayurvedic Classical Proprietary',license:'AYUR-HP-2019-410',marketRevenue:'₹5.2 Cr (IN) / £850K (UK)',confidence:'86%'}
  ],
  userCases: [
    {id:'AYU-2024-88',title:'Overcoming Section 3(p) for Bio-Enhanced Ashwagandha Root Kashaya',category:'expert',status:'pending',statusLabel:'In Review by Counsel',statusColor:'amber',applicant:'Dr. Hema',entity:'BioVeda Labs',counsel:'Adv. Bandi Mahendra',sla:'21h remaining',date:'Today, 10:15 IST',summary:'Reviewing aqueous-ethanol 70:30 extraction ratio and lipid carrier claims against Charaka Samhita Chikitsa 1.2:14 prior art citation.'},
    {id:'AYU-2024-42',title:'Triphala Ophthalmic Formulation - CSIR-TKDL Prior Art Concordance',category:'expert',status:'resolved',statusLabel:'Advisory Issued',statusColor:'emerald',applicant:'Shivani',entity:'AYUSH Practitioner',counsel:'Adv. Bandi Mahendra',sla:'Resolved',date:'24 Feb 2024',summary:'Formal legal opinion issued: Classical decoction safe under BDA Section 7 traditional vaidya exemption. No Form-1 filing required for non-commercial preparation.'},
    {id:'AI-Q-104',title:'Synergistic extraction ratios for Brahmi & Shankhpushpi under Section 3(e)',category:'ai',status:'resolved',statusLabel:'AI Research Complete',statusColor:'blue',applicant:'Naga Ganesh',entity:'Researcher',counsel:'Sahayak AI Engine',sla:'Completed',date:'22 Feb 2024',summary:'Synergistic bio-fraction matrix analysis: 60:40 ethanolic extract demonstrates non-obvious synergistic enhancement of acetylcholine receptor binding.'},
    {id:'AI-Q-091',title:'Guidance on SBB local vaidyas exemption under BDA Section 7',category:'ai',status:'resolved',statusLabel:'Statutory Guidance Generated',statusColor:'blue',applicant:'Dr. Hema',entity:'BioVeda Labs',counsel:'Sahayak AI Engine',sla:'Completed',date:'19 Feb 2024',summary:'Biological Diversity Act 2002 Section 7 statutory analysis: Local registered AYUSH practitioners exempted from prior intimation for traditional dispensary formulations.'}
  ],
  companyCases: [
    {id:'CORP-2024-101',title:'Mandatory SBB Form-1 Intimation & ABS Royalty Assessment for Commercial Raw Material Sourcing',category:'compliance',status:'pending',statusLabel:'In Review by Counsel',statusColor:'amber',applicant:'Kundan',entity:'AyurVeda Biotech Pvt Ltd',counsel:'Adv. Bandi Mahendra',sla:'4h remaining (Priority)',date:'Today, 09:30 IST',summary:'Advisory requested on fair benefit-sharing percentage (0.1% to 0.5% ex-factory sales) under 2023 Amendment Rules for wild-harvested Guduchi and Ashwagandha procurement.'},
    {id:'CORP-2024-105',title:'Patent Claim Strategy (Composition vs Formulation) & Section 3(e) Synergistic Efficacy for NirogShakti',category:'ip',status:'resolved',statusLabel:'Advisory Issued - Ready to File',statusColor:'emerald',applicant:'Kundan',entity:'AyurVeda Biotech Pvt Ltd',counsel:'Adv. Bandi Mahendra',sla:'Resolved',date:'23 Feb 2024',summary:'Counsel opinion delivered: Structure independent claim around nano-liposomal carrier system (<140nm diameter) with quantitative synergism assay data to bypass Section 3(e) objection.'},
    {id:'CORP-2024-112',title:'EU Novel Food & EMA Herbal Monograph Compliance for CurcuShield Export',category:'regulatory',status:'pending',statusLabel:'Under Regulatory Audit',statusColor:'blue',applicant:'Sumanth',entity:'Himalayan Botanicals Ltd',counsel:'Adv. Bandi Mahendra',sla:'48h remaining',date:'21 Feb 2024',summary:'Preparation of Traditional Herbal Medicinal Product (THMP) dossier under EU Directive 2004/24/EC with 30-year bibliographic evidence of traditional medicinal use.'},
    {id:'CORP-2024-118',title:'NBA Form-3 Approval for USPTO Foreign Patent Filing under Section 20 BDA',category:'compliance',status:'pending',statusLabel:'Pending NBA Review',statusColor:'amber',applicant:'Sumanth',entity:'Himalayan Botanicals Ltd',counsel:'Adv. Bandi Mahendra',sla:'Under NBA Evaluation',date:'18 Feb 2024',summary:'Application for statutory permission under Section 20 of Biological Diversity Act before filing corresponding US Patent Application (Class 424/728).' }
  ],
  facilitatorCases: [
    {id:'CORP-2024-101',title:'Mandatory SBB Form-1 Intimation & ABS Royalty Assessment for Commercial Raw Material Sourcing',priority:'High',sla:'4h remaining',applicant:'Kundan',entity:'AyurVeda Biotech Pvt Ltd (Enterprise)',product:'NirogShakti Synergistic Capsule',tags:['SBB Form-1','BDA 2002 §7','0.5% Royalty Exemption','Enterprise MSME'],tkdlOverlap:'24.1% (Safe)',confidence:'91% High',status:'Pending Review'},
    {id:'DQ-2024-1108',title:'Section 3(p) Overcoming & Foreign USPTO Filing under NBA Section 39',priority:'High',sla:'21h remaining',applicant:'Dr. Hema',entity:'BioVeda Labs (AYUSH Research)',product:'Niroga Shuddhi Rasayana',tags:['Patents Act §3(p)','NBA Act §39','35 USC §102','Section 3(e) Synergism'],tkdlOverlap:'98.4% (Citation Match)',confidence:'87% High',status:'In Review'},
    {id:'CORP-2024-105',title:'Section 3(e) Synergistic Efficacy Quantitative Assays & USPTO Class 424 Phyto-fraction Patentability',priority:'Medium',sla:'48h remaining',applicant:'Sumanth',entity:'Himalayan Botanicals Ltd (Enterprise)',product:'CurcuShield Phyto-Extract',tags:['Section 3(e)','Synergistic Admixture','USPTO Class 424','PCT Global'],tkdlOverlap:'38.2%',confidence:'84%',status:'Evidence Evaluation'},
    {id:'DQ-2024-1112',title:'CSIR-TKDL Samhita Concordance Verification and Vaidya Local Sourcing Exemption under BDA §7',priority:'Low',sla:'Resolved',applicant:'Shivani',entity:'AYUSH Practitioner (Vaidya)',product:'Triphala Ophthalmic Netra Bindu',tags:['TKDL Concordance','BDA §7 Exemption','Local Vaidya Safe Harbor'],tkdlOverlap:'94.0%',confidence:'96%',status:'Resolved & Archived'}
  ],`;

if (html.includes(defaultStateOld)) {
  html = html.replace(defaultStateOld, defaultStateNew);
  console.log('DEFAULT_STATE updated successfully');
} else {
  console.error('Could not find defaultStateOld');
}

// =============================================
// 2. UPDATE loadState()
// =============================================
const loadStateOld = `function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('ipsakti_state'));
    if (saved) {
      if (saved.users && saved.users.some(u => u.name.includes('Ramanathan') || u.name.includes('Sharma') || u.name.includes('Varma') || u.name.includes('Sen'))) {
        saved.users = DEFAULT_STATE.users;
        localStorage.setItem('ipsakti_state', JSON.stringify(saved));
      }
      return saved;
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  } catch(e) {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}`;

const loadStateNew = `function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('ipsakti_state'));
    if (saved) {
      if (saved.users && saved.users.some(u => u.name.includes('Ramanathan') || u.name.includes('Sharma') || u.name.includes('Varma') || u.name.includes('Sen'))) {
        saved.users = DEFAULT_STATE.users;
      }
      // Guarantee segregated data arrays exist
      if (!saved.userDossiers || !saved.companyProducts || !saved.companyCases || !saved.userCases || !saved.facilitatorCases) {
        saved.userDossiers = DEFAULT_STATE.userDossiers;
        saved.companyProducts = DEFAULT_STATE.companyProducts;
        saved.userCases = DEFAULT_STATE.userCases;
        saved.companyCases = DEFAULT_STATE.companyCases;
        saved.facilitatorCases = DEFAULT_STATE.facilitatorCases;
      }
      localStorage.setItem('ipsakti_state', JSON.stringify(saved));
      return saved;
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  } catch(e) {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}`;

if (html.includes(loadStateOld)) {
  html = html.replace(loadStateOld, loadStateNew);
  console.log('loadState() updated successfully');
} else {
  console.error('Could not find loadStateOld');
}

// =============================================
// 3. UPDATE NAV_CONFIGS
// =============================================
const navConfigsOld = `const NAV_CONFIGS = {
  landing: { links: [
    {label:'Home',page:'landing'},{label:'Intake Wizard',page:'intake-1'},{label:'Results Dashboard',page:'dossiers'},{label:'Ask AI',page:'ask-ai'}
  ], badge:'' },
  user: { links: [
    {label:'Home',page:'landing'},{label:'Intake Wizard',page:'intake-1'},{label:'Results Dashboard',page:'dossiers'},{label:'Ask AI',page:'ask-ai'}
  ], badge:'User // Practitioner' },
  company: { links: [
    {label:'Dashboard',page:'dossiers'},{label:'Products',page:'intake-1'},{label:'IP Portfolio',page:'tkdl'},{label:'Compliance',page:'abs'}
  ], badge:'Company // Enterprise' },
  facilitator: { links: [
    {label:'Home',page:'landing'},{label:'Query Desk',page:'facilitator'},{label:'Case History',page:'dossiers'},{label:'AI Assistant',page:'ask-ai'}
  ], badge:'Expert Panel // Counsel' },
  admin: { links: [
    {label:'Dashboard',page:'admin'},{label:'Data Sources',page:'corpus'},{label:'Users & Roles',page:'users'},{label:'Audit Log',page:'audit'}
  ], badge:'Platform Admin' }
};`;

const navConfigsNew = `const NAV_CONFIGS = {
  landing: { links: [
    {label:'Home',page:'landing'},{label:'Intake Wizard',page:'intake-1'},{label:'Results Dashboard',page:'dossiers'},{label:'Ask AI',page:'ask-ai'}
  ], badge:'' },
  user: { links: [
    {label:'Home',page:'landing'},{label:'Intake Wizard',page:'intake-1'},{label:'Results Dashboard',page:'dossiers'},{label:'Ask AI',page:'ask-ai'}
  ], badge:'User // Practitioner' },
  company: { links: [
    {label:'🏠 Dashboard',page:'company-dashboard'},
    {label:'🌿 Products',page:'company-products'},
    {label:'🛡️ IP Portfolio',page:'company-portfolio'},
    {label:'📋 Regulatory',page:'company-regulatory'},
    {label:'🌱 ABS',page:'abs'},
    {label:'🌍 Market Access',page:'company-market'},
    {label:'📁 Documents',page:'company-documents'},
    {label:'📊 Reports',page:'company-reports'},
    {label:'👨‍⚖️ Expert Cases',page:'company-cases'},
    {label:'👥 Team Members',page:'company-team'}
  ], badge:'Company // Enterprise' },
  facilitator: { links: [
    {label:'Case Queue',page:'facilitator-queue'},
    {label:'Review Desk',page:'facilitator'},
    {label:'Case History',page:'facilitator-history'},
    {label:'AI Assistant',page:'ask-ai'}
  ], badge:'Human Expert // Counsel' },
  admin: { links: [
    {label:'Dashboard',page:'admin'},{label:'Data Sources',page:'corpus'},{label:'Users & Roles',page:'users'},{label:'Audit Log',page:'audit'}
  ], badge:'Platform Admin' }
};`;

if (html.includes(navConfigsOld)) {
  html = html.replace(navConfigsOld, navConfigsNew);
  console.log('NAV_CONFIGS updated successfully');
} else {
  console.error('Could not find navConfigsOld');
}

// =============================================
// 4. UPDATE navigate() & setRole()
// =============================================
const navigateOld = `function navigate(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) { target.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
  
  const userPages = ['landing','intake-1','intake-2','intake-3','intake-4','intake-5','ask-ai'];
  const companyPages = ['dossiers','tkdl','abs','escalation'];
  const adminPages = ['admin','corpus','source-edit','users','audit'];
  const facilitatorPages = ['facilitator'];
  
  if (page === 'roles') { /* keep current role unchanged */ }
  else if (facilitatorPages.includes(page)) { if(currentRole !== 'facilitator') currentRole = 'facilitator'; }
  else if (adminPages.includes(page)) { if(currentRole !== 'admin') currentRole = 'admin'; }
  else if (companyPages.includes(page)) { if(!currentRole || currentRole === 'admin') currentRole = 'company'; }
  else if (userPages.includes(page)) { if(!currentRole || currentRole === 'admin' || currentRole === 'company') currentRole = currentRole || 'user'; }
  
  updateNav(page);
  history.replaceState(null, '', '#' + page);
  
  // Dynamic rendering for certain pages
  if(page === 'facilitator') initFacilitatorDesk();
  if(page === 'dossiers') { renderDossiers(); if(typeof switchResultsTab === 'function') switchResultsTab(window.currentResultsTab || 'evidence'); }
  if(page === 'admin') renderAdminStats();
  if(page === 'users') renderUsers();
  if(page === 'corpus') renderCorpus();
  if(page === 'audit') renderAuditLog();
  if(page === 'intake-5') renderIntakeReview();
  if(page === 'ask-ai' && typeof initChatHistory === 'function') initChatHistory();
}

function setRole(role) {
  currentRole = role;
  const roleNames = {
    user: 'User / Practitioner',
    company: 'Company / Industry',
    admin: 'System Administrator',
    facilitator: 'Human Expert / AYUSH IP Counsel'
  };
  showToast(\`Signed in as \${roleNames[role] || role}\`, 'success');
  if (role === 'admin') navigate('admin');
  else if (role === 'company') navigate('dossiers');
  else if (role === 'facilitator') navigate('facilitator');
  else navigate('landing');
}`;

const navigateNew = `function navigate(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) { target.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
  
  const userPages = ['landing','intake-1','intake-2','intake-3','intake-4','intake-5','dossiers'];
  const companyPages = [
    'company-dashboard','company-products','company-portfolio','company-regulatory',
    'company-market','company-documents','company-reports','company-cases','company-team'
  ];
  const adminPages = ['admin','corpus','source-edit','users','audit'];
  const facilitatorPages = ['facilitator','facilitator-queue','facilitator-history'];
  
  if (page === 'roles') { /* keep current role unchanged */ }
  else if (facilitatorPages.includes(page)) { if(currentRole !== 'facilitator') currentRole = 'facilitator'; }
  else if (adminPages.includes(page)) { if(currentRole !== 'admin') currentRole = 'admin'; }
  else if (companyPages.includes(page)) { if(currentRole !== 'company') currentRole = 'company'; }
  else if (userPages.includes(page)) { 
    if(!currentRole || currentRole === 'admin' || currentRole === 'facilitator') {
      currentRole = 'user';
    }
  }
  
  updateNav(page);
  history.replaceState(null, '', '#' + page);
  
  // Dynamic rendering for pages
  if(page === 'facilitator-queue') renderFacilitatorQueue();
  if(page === 'facilitator') initFacilitatorDesk();
  if(page === 'facilitator-history') renderFacilitatorHistory();
  if(page === 'company-dashboard') renderCompanyDashboard();
  if(page === 'company-products') renderCompanyProducts();
  if(page === 'company-portfolio') renderCompanyPortfolio();
  if(page === 'company-regulatory') renderCompanyRegulatory();
  if(page === 'company-market') renderCompanyMarket();
  if(page === 'company-documents') renderCompanyDocuments();
  if(page === 'company-reports') renderCompanyReports();
  if(page === 'company-cases') renderCompanyCases();
  if(page === 'company-team') renderCompanyTeam();
  if(page === 'dossiers') { 
    renderDossiers(); 
    renderMyCases();
    if(typeof switchResultsTab === 'function') switchResultsTab(window.currentResultsTab || 'evidence'); 
  }
  if(page === 'admin') renderAdminStats();
  if(page === 'users') renderUsers();
  if(page === 'corpus') renderCorpus();
  if(page === 'audit') renderAuditLog();
  if(page === 'intake-5') renderIntakeReview();
  if(page === 'ask-ai' && typeof initChatHistory === 'function') initChatHistory();
}

function setRole(role) {
  currentRole = role;
  const roleNames = {
    user: 'User / Practitioner',
    company: 'Company / Enterprise',
    admin: 'System Administrator',
    facilitator: 'Human Expert / AYUSH IP Counsel'
  };
  showToast(\`Signed in as \${roleNames[role] || role}\`, 'success');
  if (role === 'admin') navigate('admin');
  else if (role === 'company') navigate('company-dashboard');
  else if (role === 'facilitator') navigate('facilitator-queue');
  else navigate('landing');
}`;

if (html.includes(navigateOld)) {
  html = html.replace(navigateOld, navigateNew);
  console.log('navigate() & setRole() updated successfully');
} else {
  console.error('Could not find navigateOld');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Saved Phase 1 updates');
