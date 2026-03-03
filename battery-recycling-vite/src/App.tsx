import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="app">
      <div className="bg-animation"></div>
      <div className="grid-overlay"></div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">Z1 Process</div>
          <div className="nav-links">
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>Process</a>
            <a href="#oklahoma" onClick={(e) => { e.preventDefault(); scrollToSection('oklahoma') }}>Oklahoma</a>
            <a href="#costs" onClick={(e) => { e.preventDefault(); scrollToSection('costs') }}>Costs</a>
            <a href="#suppliers" onClick={(e) => { e.preventDefault(); scrollToSection('suppliers') }}>Suppliers</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-badge">Oklahoma DEQ Compliant</div>
        <h1>USA Battery Recycling<br />Equipment Guide</h1>
        <p className="subtitle">Hybrid Approach: Chinese Equipment + Western Safety Systems<br />Complete 14-Step Process with Discharge, PACK Decomposition & Waste Gas Treatment</p>
        
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="value">$370K-600K</div>
            <div className="label">Total CAPEX</div>
          </div>
          <div className="metric-card">
            <div className="value">1-2 t/h</div>
            <div className="label">Capacity</div>
          </div>
          <div className="metric-card">
            <div className="value">24-30 mo</div>
            <div className="label">Payback Period</div>
          </div>
          <div className="metric-card">
            <div className="value">95%+</div>
            <div className="label">Recovery Rate</div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('process')}>
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* Process Flow */}
      <section id="process">
        <div className="section-header">
          <span className="section-number">// Complete Process Flow</span>
          <h2 className="section-title">14-Step Recycling Process</h2>
          <p className="section-subtitle">From battery receipt to black mass production with discharge, PACK decomposition, and waste gas treatment</p>
        </div>
        
        <div className="warning-banner">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <div>
            <h4>Critical Additions Based on Research</h4>
            <p>This enhanced process includes battery discharge (Step 2), PACK decomposition (Step 3), and organic waste gas treatment (Step 11) - essential for safe, Oklahoma-compliant operations. Without discharge, batteries can cause fires during shredding. Without waste gas treatment, the facility won't meet Oklahoma DEQ permits.</p>
          </div>
        </div>
        
        <div className="process-flow">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-meta">
                <span className={`supplier-tag ${step.tagType}`}>{step.tag}</span>
                {step.cost && <div className="cost-tag">{step.cost}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Oklahoma Compliance */}
      <section id="oklahoma">
        <div className="section-header">
          <span className="section-number">// Oklahoma Regulations</span>
          <h2 className="section-title">Oklahoma DEQ Compliance</h2>
          <p className="section-subtitle">Green Li-ion opened facility in Atoka, Oklahoma (2024). Key regulatory requirements for battery recycling in Oklahoma.</p>
        </div>
        
        <div className="oklahoma-grid">
          {oklahomaInfo.map((info, index) => (
            <div key={index} className="ok-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={info.iconPath}/>
                </svg>
              </div>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Breakdown */}
      <section id="costs">
        <div className="section-header">
          <span className="section-number">// Investment</span>
          <h2 className="section-title">Cost Breakdown</h2>
          <p className="section-subtitle">Complete 14-step process with all required equipment including discharge, PACK decomposition, and waste gas treatment</p>
        </div>
        
        <div className="cost-grid">
          {costBreakdown.map((cost, index) => (
            <div key={index} className={`cost-card ${cost.highlight ? 'highlight' : ''}`}>
              <h3>{cost.title}</h3>
              <div className="amount">{cost.amount}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Suppliers */}
      <section id="suppliers">
        <div className="section-header">
          <span className="section-number">// Equipment Sources</span>
          <h2 className="section-title">Key Suppliers</h2>
        </div>
        
        <div className="suppliers-grid">
          {suppliers.map((supplier, index) => (
            <div key={index} className="supplier-card">
              <p className="origin">{supplier.origin}</p>
              <h3>{supplier.name}</h3>
              <p>{supplier.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Factors */}
      <section id="factors">
        <div className="section-header">
          <span className="section-number">// Critical Success</span>
          <h2 className="section-title">Success Factors</h2>
        </div>
        
        <div className="factors-grid">
          {successFactors.map((factor, index) => (
            <div key={index} className="factor-card">
              <div className="factor-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={factor.iconPath}/>
                </svg>
              </div>
              <div className="factor-content">
                <h3>{factor.title}</h3>
                <p>{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Build Your Plant?</h2>
        <p>Contact suppliers for quotes. Start with feedstock agreements and offtake contracts. Ensure Oklahoma DEQ compliance from day one.</p>
        <a href="#process" className="btn" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>
          View Complete Process
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </section>
    </div>
  )
}

const processSteps = [
  {
    title: "Battery Collection & Receiving",
    description: "EV batteries, laptop batteries, power tools received and logged. All chemistries accepted: NMC, LFP, NCA, LCO. Stored in fire-resistant containers with proper spacing.",
    tag: "Required",
    tagType: "required",
    cost: null
  },
  {
    title: "🔋 Battery Discharge Station",
    description: "CRITICAL SAFETY STEP. Batteries discharged to <1V/cell using resistive load banks. Prevents thermal runaway and fires during shredding. 4-24 hours depending on size. OSHA requires proper discharge before processing.",
    tag: "NEW - REQUIRED",
    tagType: "required",
    cost: "$15K-30K"
  },
  {
    title: "🔧 PACK Decomposition",
    description: "NEW STEP. EV battery packs disassembled to module/cell level. Remove steel casings, thermal management systems, BMS wiring. Manual sorting by chemistry type (NMC vs LFP).",
    tag: "NEW - REQUIRED",
    tagType: "required",
    cost: "$10K-20K"
  },
  {
    title: "Primary Shredder",
    description: "Double-shaft shear shredder under nitrogen atmosphere. Breaks open battery cells, releases electrode materials. Output: 50-100mm fragments. Gas-tight design required.",
    tag: "Genox / Xingmao",
    tagType: "china",
    cost: "$25K-45K"
  },
  {
    title: "Secondary Crusher / Hammer Mill",
    description: "High-speed impact crusher at 1500 rpm (optimal per MDPI research). Liberates electrode materials from current collectors. Output: <20mm particles. Reduces binder adhesion.",
    tag: "Xingmao / Henan Doing",
    tagType: "china",
    cost: "$15K-25K"
  },
  {
    title: "Vibrating Screen Separation",
    description: "Multi-deck screens (2mm, 5mm, 20mm) classify materials by size. Fine black mass powder passes through; larger fragments recirculate for further milling. Critical for purity.",
    tag: "Xingmao",
    tagType: "china",
    cost: "$8K-15K"
  },
  {
    title: "Magnetic Separation",
    description: "Rare earth drum magnet extracts ferrous materials (steel casings, iron contaminants). Protects downstream equipment and improves black mass purity. Eriez standard.",
    tag: "Eriez USA",
    tagType: "western",
    cost: "$10K-20K"
  },
  {
    title: "Eddy Current Separation",
    description: "Non-ferrous metal separator recovers aluminum and copper from current collectors. Higher recovery rates justify premium Western equipment. 95%+ recovery achievable.",
    tag: "Eriez USA",
    tagType: "western",
    cost: "$20K-35K"
  },
  {
    title: "Air Classification",
    description: "Density separation separates black mass from lighter plastic and separator fragments. Critical for achieving clean black mass output. Air knife or zig-zag separators.",
    tag: "Xingmao",
    tagType: "china",
    cost: "$10K-20K"
  },
  {
    title: "Drying System",
    description: "Remove moisture accumulated during processing. Rotary dryer or oven at 80-120°C. Electrolyte evaporates during this step - requires waste gas treatment downstream.",
    tag: "Xingmao",
    tagType: "china",
    cost: "$12K-25K"
  },
  {
    title: "🌿 Organic Waste Gas Treatment",
    description: "OKLAHOMA DEQ COMPLIANCE REQUIRED. Electrolyte (organic solvents - DMC, EMC, DEC) evaporates during drying. Requires acid gas scrubbers, activated carbon filters, HEPA final filtration. Essential for DEQ air quality permits.",
    tag: "NEW - REQUIRED",
    tagType: "required",
    cost: "$25K-50K"
  },
  {
    title: "Black Mass Collection",
    description: "Fine powder collected from dust systems and cyclones. Quality sampling for Li, Co, Ni, Mn content verification. Sealed containers for transport to hydrometallurgical processors.",
    tag: "Xingmao + Western Filters",
    tagType: "china",
    cost: "$10K-18K"
  },
  {
    title: "🔥 Nitrogen Inertization System",
    description: "SAFETY CRITICAL. Membrane nitrogen generator maintains O2 <5% in shredding area. Prevents fires and thermal runaway. Continuous O2 monitoring required. Generon industry standard.",
    tag: "Generon USA",
    tagType: "safety",
    cost: "$30K-50K"
  },
  {
    title: "🚨 Fire Suppression & Gas Detection",
    description: "SAFETY CRITICAL. Water mist + CO2 fire suppression. HF, HCN, CO gas detection with ATEX-rated sensors. Insurance requirement. Drager/Honeywell for detection, Siemens for suppression.",
    tag: "Drager / Siemens USA",
    tagType: "safety",
    cost: "$40K-70K"
  }
]

const oklahomaInfo = [
  {
    title: "DEQ Permits Required",
    description: "Oklahoma DEQ requires air quality permits for emissions. Battery recycling facilities qualify for 'synthetic minor' permits if emissions stay below major source thresholds (100 tons/year).",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "HB1907 - B2B Battery Regulations",
    description: "Oklahoma HB1907 establishes regulations for business-to-business batteries. Improper disposal subject to hazardous waste penalties. Producer responsibility requirements.",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "EPA Hazardous Waste (D001/D003)",
    description: "Lithium-ion batteries classified as ignitable (D001) and reactive (D003) hazardous waste under EPA RCRA. Must comply with federal hazardous waste regulations. Proper handling required.",
    iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    title: "Critical Minerals Hub",
    description: "Oklahoma offers expedited permitting for battery recycling in 'Critical Minerals Hub' zones. Atoka facility operates in Heavy Industrial Park with Tier 1 EPA permits (lowest level).",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  }
]

const costBreakdown = [
  { title: "Chinese Equipment (1-12)", amount: "$140K-250K", highlight: false },
  { title: "Western Safety + Separation", amount: "$100K-175K", highlight: false },
  { title: "Discharge + PACK + Gas Treatment", amount: "$50K-100K", highlight: false },
  { title: "Installation & Commissioning", amount: "$80K-150K", highlight: false },
  { title: "Total Project", amount: "$370K-600K", highlight: true }
]

const suppliers = [
  { origin: "China", name: "Genox", description: "Complete recycling lines, shredders. Has US office. Partnerships with Sicon GmbH." },
  { origin: "China", name: "Xingmao", description: "Verified 1.5 t/h USA install, 2 t/h Korea. Strong international track record." },
  { origin: "USA", name: "Eriez", description: "Magnetic & eddy current separators. Industry standard, highest recovery rates." },
  { origin: "USA", name: "Generon", description: "Nitrogen membrane generators. Industry standard for inert atmosphere." },
  { origin: "USA / Germany", name: "Drager", description: "Gas detection (HF, HCN, CO). ATEX certified, regulatory acceptance." },
  { origin: "USA", name: "Siemens", description: "Fire suppression systems. Industry standard, insurance approved." }
]

const successFactors = [
  {
    title: "Feedstock First",
    description: "Secure 2-3 year battery supply agreements before purchasing equipment. Battery availability is the #1 success factor.",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  },
  {
    title: "Offtake Contracts",
    description: "Identify black mass buyers (Li-Cycle, Redwood Materials, Glencore). Negotiate pricing tied to metal prices.",
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Oklahoma DEQ Permits",
    description: "Budget for environmental permitting. Work with DEQ early. Green Li-ion example shows synthetic minor permits achievable.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Safety Budget - Non-Negotiable",
    description: "Never reduce Western safety allocation. One incident can destroy your business. Insurance requires proper systems.",
    iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }
]

export default App
