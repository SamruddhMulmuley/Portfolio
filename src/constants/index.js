const navLinks = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const counterItems = [
  { value: 9, suffix: "+", label: "Academic Projects Completed" },
  { value: 4, suffix: "+", label: "Engineering Internships" },
  { value: 25, suffix: "%", label: "Cycle Time Reduced at L&T" },
  { value: 50, suffix: "%", label: "WIP Reduced via SMED" },
];

const words = [
  { text: "Supply Chains", imgPath: "/images/ideas.svg" },
  { text: "Operations", imgPath: "/images/concepts.svg" },
  { text: "Processes", imgPath: "/images/designs.svg" },
  { text: "Systems", imgPath: "/images/code.svg" },
  { text: "Supply Chains", imgPath: "/images/ideas.svg" },
  { text: "Operations", imgPath: "/images/concepts.svg" },
  { text: "Processes", imgPath: "/images/designs.svg" },
  { text: "Systems", imgPath: "/images/code.svg" },
];

const heroTags = [
  "Supply Chain Analytics",
  "Manufacturing Optimization",
  "Operations Research",
  "Lean Six Sigma",
  "Process Improvement",
];

/* ─── Experience ─────────────────────────────────────────── */
const expCards = [
  {
    logoAbbr: "TC",
    logoColor: "#62e0ff",
    company: "TellCo Europe Sagl",
    title: "Supply Chain & Product Listing Intern",
    date: "Sep 2025 – Dec 2025 · Remote (New York, USA)",
    impact: [
      "Built SKU-level profitability analytics dashboard",
      "Identified low-margin SKUs for supplier renegotiation",
      "Managed product listings and improved SEO visibility",
      "Supported fulfillment tracking and supplier coordination",
      "Conducted inventory analysis and stock optimization reporting",
    ],
    responsibilities: [
      "Developed a Python-based analytics dashboard integrating product cost, supplier pricing, and margin data to enable SKU-level profitability analysis and support procurement decisions.",
      "Built a cost-margin evaluation model to identify low-margin SKUs and support supplier renegotiation and pricing strategy improvements.",
      "Managed product data and listings across platforms, ensuring accuracy in descriptions, pricing, and categorization while improving search visibility through structured SEO practices.",
      "Coordinated order fulfillment and logistics operations, tracking shipments and monitoring supplier stock levels to reduce delays and improve delivery reliability.",
      "Conducted SKU-level inventory analysis and generated periodic reports to support data-driven planning and stock optimization decisions.",
      "Evaluated suppliers across cost, reliability, and sustainability criteria to support sourcing decisions and strengthen supply chain resilience.",
      "Collaborated with cross-functional teams including marketing and customer operations to support product launches, resolve fulfillment issues, and improve overall customer experience.",
    ],
  },
  {
    logoAbbr: "L&T",
    logoColor: "#45dec4",
    company: "Larsen & Toubro",
    title: "R&D Intern – Aerospace Fabrication",
    date: "Jan 2023 – May 2023",
    impact: [
      "25% reduction in production cycle time (LVM-3 booster line)",
      "20% reduction in labor costs via digitized measurement systems",
      "Designed surface protection protocol for maraging steel",
      "Improved throughput reliability on ISRO aerospace assembly line",
    ],
    responsibilities: [
      "Analyzed production bottlenecks and material flow inefficiencies in ISRO's LVM-3 booster assembly line, improving throughput reliability.",
      "Reduced production cycle time by 25% by designing and implementing a surface protection protocol for maraging steel.",
      "Introduced digitized parametric measurement systems and advanced machining techniques, improving accuracy and reducing labor costs by 20%.",
      "Supported shop-floor optimization and process automation to enhance manufacturing efficiency.",
    ],
  },
  {
    logoAbbr: "HAL",
    logoColor: "#52aeff",
    company: "Hindustan Aeronautics Limited",
    title: "R&D Intern",
    date: "Jun 2022 – Aug 2022",
    impact: [
      "Aircraft component design using CATIA V5 to aerospace spec",
      "FEA structural & fatigue analysis via ABAQUS + HyperMesh",
      "Validated high-performance systems in research environment",
      "Strengthened link between design, simulation & manufacturability",
    ],
    responsibilities: [
      "Designed aircraft components using CATIA V5 with strong emphasis on precision and aerospace compliance.",
      "Performed finite element analysis using ABAQUS and HyperMesh to evaluate structural integrity and fatigue performance.",
      "Contributed to the design and validation of high-performance aircraft systems in a research-driven engineering environment.",
      "Strengthened understanding of the relationship between design, simulation, and manufacturability.",
    ],
  },
  {
    logoAbbr: "RNL",
    logoColor: "#9b6dff",
    company: "Ruffalo Noel Levitz",
    title: "Engagement Ambassador Supervisor",
    date: "Sep 2024 – Present",
    impact: [
      "Supervised ambassador team operations and outreach performance",
      "Drove alumni engagement supporting scholarship fundraising goals",
      "Built stakeholder relationships through high-volume outreach",
      "Contributed to mission-driven community impact initiatives",
    ],
    responsibilities: [
      "Supervised and mentored a team of engagement ambassadors, coordinating daily outreach operations and performance feedback.",
      "Strengthened alumni engagement through personalized relationship-building conversations aligned with institutional giving goals.",
      "Helped drive fundraising outcomes that supported scholarships, research, and student success initiatives.",
      "Developed communication, persuasion, and stakeholder management skills through consistent high-volume outreach.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

/* ─── Projects ───────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    category: "Supply Chain",
    categoryColor: "#62e0ff",
    context: "NYU Capstone · CoreSpeed Inc.",
    title: "AI-Driven Inventory Optimization & Supplier Risk Analytics",
    summary:
      "AI-enabled decision-support system for multi-SKU inventory optimization and supplier risk evaluation.",
    description:
      "Designed an AI-enabled decision-support system for optimizing inventory policies and evaluating supplier risk across multi-SKU environments. The system integrates operations research models with scalable analytics pipelines to support real-world supply chain decision-making.",
    bullets: [
      "Developed an inventory optimization engine using EOQ, Safety Stock, and Reorder Point (ROP) models.",
      "Incorporated demand variability, lead-time uncertainty, and cost parameters into decision logic.",
      "Built scalable data pipelines using synthetic and real-world datasets.",
      "Designed a supplier risk evaluation framework based on lead-time variability and performance consistency.",
      "Enabled SKU-level inventory decision-making across complex product portfolios.",
    ],
    outcome:
      "Improved visibility into cost drivers, inventory policies, and supplier risk. Demonstrated how AI-enabled analytics enhances planning accuracy and operational resilience.",
    tools: ["Python", "EOQ / ROP", "Supply Chain Analytics", "Operations Research", "Data Pipelines", "AI Decision Systems"],
  },
  {
    id: 2,
    category: "Manufacturing",
    categoryColor: "#9b6dff",
    context: "Lean Six Sigma Project",
    title: "Changeover Time & Overtime Reduction Using SMED",
    summary:
      "Reduced changeover losses, WIP, and overtime in a high-mix production environment using Lean Six Sigma.",
    description:
      "Led a manufacturing optimization initiative to reduce excessive changeover time, overtime, and work-in-process inventory in a high-mix production environment using Lean Six Sigma and SMED methodologies.",
    bullets: [
      "Conducted time studies and Value Stream Mapping to identify process bottlenecks.",
      "Applied SMED principles to convert internal setup tasks into external activities.",
      "Designed 5S-based improvements and standardized tooling layouts.",
      "Performed root cause analysis to address variability in setup and operations.",
    ],
    outcome:
      "Reduced WIP by ~50%, cut production lead time by 20–25%, lowered overtime, and improved equipment availability and schedule stability.",
    tools: ["Lean Six Sigma", "SMED", "VSM", "5S", "Root Cause Analysis", "Process Optimization"],
  },
  {
    id: 3,
    category: "Supply Chain",
    categoryColor: "#62e0ff",
    context: "Supply Chain Network Design",
    title: "Strategic Supply Chain Simulation – Dollar Tree",
    summary:
      "Designed a large-scale forward supply chain network for 1.8M+ units across 7,800+ retail locations.",
    description:
      "Designed and evaluated a large-scale forward supply chain network for distributing over 1.8 million units annually across 7,800+ retail locations, focusing on improving efficiency, service levels, and cost performance.",
    bullets: [
      "Developed a complete supply chain network model for high-volume distribution.",
      "Created DRP and MPS-based planning frameworks.",
      "Applied demand forecasting and lot-sizing techniques.",
      "Conducted ROI and cash-to-cash cycle analysis.",
      "Identified system bottlenecks and integration risks.",
    ],
    outcome:
      "Improved inventory turnover and reduced holding costs. Enhanced service levels and provided actionable insights for scalable supply chain design.",
    tools: ["Supply Chain Modeling", "DRP", "MPS", "Forecasting", "Financial Analysis", "Inventory Strategy"],
  },
  {
    id: 4,
    category: "Simulation",
    categoryColor: "#45dec4",
    context: "Monte Carlo Simulation",
    title: "Stochastic Simulation for Cost-Efficient Project Management",
    summary:
      "Monte Carlo simulation model to optimize cost and schedule outcomes under construction project uncertainty.",
    description:
      "Developed a stochastic simulation model to optimize cost and schedule outcomes for a construction project under uncertainty using Monte Carlo methods.",
    bullets: [
      "Modeled uncertainty in labor availability and weather disruptions.",
      "Simulated project schedules with precedence constraints.",
      "Applied dynamic overtime strategies for delay recovery.",
      "Ran multiple Monte Carlo simulations to evaluate cost and timeline variability.",
    ],
    outcome:
      "Reduced cost risk and improved schedule reliability. Identified key risk drivers and demonstrated the value of probabilistic modeling for data-driven project planning.",
    tools: ["Python", "Monte Carlo Simulation", "Stochastic Modeling", "Project Scheduling", "Risk Analysis"],
  },
  {
    id: 5,
    category: "Facility Design",
    categoryColor: "#fd5c79",
    context: "Industrial Engineering Project",
    title: "Advanced Facility Planning & Manufacturing Layout Design",
    summary:
      "Optimized, safety-compliant manufacturing facility layout for a detergent production plant.",
    description:
      "Designed an optimized and safety-compliant manufacturing facility layout for a detergent production plant, focusing on workflow efficiency, safety, and scalability.",
    bullets: [
      "Developed a CAD-based facility layout optimizing workflow and space utilization.",
      "Designed integrated zones for storage, blending, packaging, and logistics.",
      "Incorporated OSHA-compliant safety systems and ventilation planning.",
      "Optimized ergonomic workstations and automation-ready layouts.",
    ],
    outcome:
      "Reduced material handling time, improved production flow, enhanced worker safety and regulatory compliance, and created a scalable facility design.",
    tools: ["AutoCAD", "Facility Planning", "Manufacturing Layout", "OSHA Compliance", "Process Design"],
  },
  {
    id: 6,
    category: "Manufacturing",
    categoryColor: "#9b6dff",
    context: "Lean Manufacturing Project",
    title: "Lean Transformation Initiative – Perjuangan Steel Group",
    summary:
      "Implemented Lean principles to cut defects by ~50% and improve labor efficiency in a steel production environment.",
    description:
      "Implemented Lean manufacturing principles to improve efficiency, quality, and operational performance in a production environment, targeting key KPIs including defect reduction, labor efficiency, and lead time.",
    bullets: [
      "Applied Kaizen and root cause analysis to systematically reduce defects.",
      "Implemented cross-training and job rotation strategies to improve workforce flexibility.",
      "Introduced Just-In-Time (JIT) production practices to reduce waste.",
      "Integrated Total Productive Maintenance (TPM) protocols for improved equipment reliability.",
    ],
    outcome:
      "Reduced defects by ~50%, improved labor efficiency by 15–20%, cut lead time from 4 days to 2–3 days, and improved overall manufacturing productivity and flow.",
    tools: ["Lean Manufacturing", "Kaizen", "JIT", "TPM", "Root Cause Analysis"],
  },
  {
    id: 7,
    category: "Process Improvement",
    categoryColor: "#52aeff",
    context: "Process Improvement Case Study",
    title: "Retail Operations Redesign with Statistical Quality Control",
    summary:
      "Redesigned an online retail fulfillment process using SQC and data analysis, improving service levels by 12.5%.",
    description:
      "Analyzed and redesigned an online retail fulfillment process using statistical quality control and process improvement techniques to address inefficiencies and delivery delays.",
    bullets: [
      "Evaluated process performance using I-MR control charts and capability analysis.",
      "Identified variability and data grouping issues in fulfillment processes.",
      "Proposed layout redesign using market basket analysis.",
      "Designed parallel picking and optimized delivery routing strategies.",
    ],
    outcome:
      "Improved service-level performance by ~12.5%, reduced walking time, improved workforce efficiency, and enhanced delivery consistency through data-driven process improvements.",
    tools: ["Statistical Quality Control", "Process Analysis", "Control Charts", "Optimization", "Data Analysis"],
  },
  {
    id: 8,
    category: "Operations Strategy",
    categoryColor: "#45dec4",
    context: "Strategic Operations Project",
    title: "Feasibility Study – Manufacturing Relocation (NYC to Mexico)",
    summary:
      "Comprehensive feasibility study evaluating the financial, operational, and strategic case for relocating a manufacturing facility.",
    description:
      "Conducted a comprehensive feasibility study to evaluate the relocation of a manufacturing operation from NYC to Mexico, analyzing financial, operational, and strategic implications.",
    bullets: [
      "Developed cost comparison and sensitivity models for relocation scenarios.",
      "Evaluated labor markets, infrastructure, and operational readiness in target regions.",
      "Assessed legal, compliance, and cross-border risk factors.",
      "Modeled project timelines using critical path analysis.",
    ],
    outcome:
      "Provided structured recommendations for relocation decision-making. Identified cost-saving opportunities, highlighted operational risks, and demonstrated alignment between strategy and regional capabilities.",
    tools: ["Feasibility Analysis", "Cost Modeling", "Project Planning", "Risk Assessment", "Critical Path Analysis"],
  },
  {
    id: 9,
    category: "Analytics",
    categoryColor: "#fd5c79",
    context: "Financial Analytics Project",
    title: "Probabilistic Risk Management Using Monte Carlo Simulation",
    summary:
      "Probabilistic risk modeling framework for financial portfolio analysis under market uncertainty.",
    description:
      "Developed a probabilistic risk modeling framework using Monte Carlo simulation to evaluate financial market uncertainty and optimize portfolio decision-making.",
    bullets: [
      "Created simulation models for portfolio performance under normal, crash, and high-volatility market conditions.",
      "Implemented Geometric Brownian Motion (GBM) for stock price modeling.",
      "Applied Value at Risk (VaR) and Expected Shortfall (ES) metrics.",
      "Integrated predictive models to enhance risk forecasting accuracy.",
    ],
    outcome:
      "Improved understanding of risk exposure under volatility, enabled better portfolio decision-making, and showcased advanced stochastic modeling and analytical capabilities.",
    tools: ["Python", "Monte Carlo Simulation", "GBM", "VaR", "Risk Analytics", "Predictive Modeling"],
  },
];

/* ─── Leadership / Extracurriculars ─────────────────────── */
const leadership = [
  {
    role: "General Secretary",
    org: "Coreografia MUJ",
    icon: "🎭",
    color: "#fd5c79",
    desc: "Managed a 400-member university dance society, leading large-scale coordination across teams while organizing online and offline events and competitions.",
  },
  {
    role: "Mechanical & Design Subsystem Head",
    org: "Mars Rover MUJ",
    icon: "🚀",
    color: "#62e0ff",
    desc: "Led the mechanical subsystem for a student Mars Rover project, designing the chassis and robotic arm, developing torque mechanisms, and validating performance through simulation using ANSYS and Gazebo.",
  },
  {
    role: "Content Team Lead",
    org: "Hult Prize MUJ",
    icon: "💡",
    color: "#45dec4",
    desc: "Supported entrepreneurship-focused student initiatives through content strategy, communications, and event coordination in a startup and innovation environment.",
  },
  {
    role: "Deputy Head of Content",
    org: "MUJ ACM Student Chapter",
    icon: "💻",
    color: "#9b6dff",
    desc: "Created and managed technical and promotional content for the student chapter's digital presence, strengthening communication and organizational storytelling.",
  },
];

/* ─── Education ──────────────────────────────────────────── */
const educations = [
  {
    school: "New York University",
    degree: "MS, Industrial Engineering",
    dates: "Sep 2024 – Present",
    location: "New York, USA",
    color: "#52aeff",
    icon: "🎓",
    courses: [
      "Operations Research",
      "Stochastic Models",
      "Facility Planning & Design",
      "Lean Manufacturing",
      "Quality Control & Improvement",
      "Project Planning & Control",
    ],
  },
  {
    school: "Manipal University Jaipur",
    degree: "BTech, Mechanical Engineering",
    dates: "2019 – 2023",
    location: "Jaipur, India",
    color: "#45dec4",
    icon: "🏛️",
    courses: [
      "Engineering Design",
      "Manufacturing Processes",
      "Thermodynamics",
      "Fluid Mechanics",
      "CAD/CAM",
      "Industrial Management",
    ],
  },
];

/* ─── Certifications ─────────────────────────────────────── */
const certifications = [
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "CSSC",
    icon: "🟢",
    color: "#45dec4",
  },
  {
    title: "Advanced Automobile Engines",
    issuer: "Baba Automobile Pvt Ltd",
    icon: "⚙️",
    color: "#62e0ff",
  },
  {
    title: "Intro to Mechanical Engineering Design & Manufacturing with Fusion 360",
    issuer: "Autodesk",
    icon: "🔧",
    color: "#9b6dff",
  },
  {
    title: "Programming for Everybody – Getting Started with Python",
    issuer: "University of Michigan",
    icon: "🐍",
    color: "#52aeff",
  },
];

/* ─── Social ──────────────────────────────────────────────── */
const socialImgs = [
  { name: "linkedin", imgPath: "/images/linkedin.png", href: "#" },
  { name: "x", imgPath: "/images/x.png", href: "#" },
  { name: "insta", imgPath: "/images/insta.png", href: "#" },
];

export {
  navLinks,
  words,
  counterItems,
  heroTags,
  expCards,
  expLogos,
  projects,
  leadership,
  educations,
  certifications,
  socialImgs,
};
