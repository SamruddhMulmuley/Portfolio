# Samruddh Mulmuley — Industrial Engineering Portfolio

A modern, interactive 3D portfolio built to showcase my work in supply chain analytics, manufacturing optimization, operations research, and industrial engineering.

**Live Site:** [coming soon]  
**LinkedIn:** [linkedin.com/in/samruddhmulmuley](https://linkedin.com/in/samruddhmulmuley)

---

## About

I'm an Industrial Engineering graduate student at NYU with hands-on experience optimizing manufacturing and supply chain systems through data analysis, simulation, and Lean methodologies. This portfolio presents my academic projects, professional experience, and technical skills in a visually immersive format.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 6 |
| 3D Engine | Three.js + React Three Fiber + Drei |
| Animations | GSAP + ScrollTrigger |
| Styling | Tailwind CSS v4 |
| Contact Form | EmailJS |
| Deployment | Vercel |

---

## Sections

- **Hero** — Animated 3D supply chain network scene with name, positioning, and skill tags
- **About** — Professional summary and core competencies
- **Experience** — 4 industry roles with company branding cards and impact highlights
- **Projects** — 9 academic and applied projects with expandable detail modals
- **Leadership** — Extracurricular roles and student organizations
- **Education** — NYU (MS Industrial Engineering) + Manipal University (BTech Mechanical Engineering)
- **Certifications** — Lean Six Sigma Green Belt and other professional credentials
- **Contact** — EmailJS-powered contact form + links

---

## Featured Projects

1. AI-Driven Inventory Optimization & Supplier Risk Analytics *(NYU Capstone)*
2. Changeover Time & Overtime Reduction Using SMED *(Lean Six Sigma)*
3. Strategic Supply Chain Simulation – Dollar Tree
4. Stochastic Simulation for Cost-Efficient Project Management
5. Advanced Facility Planning & Manufacturing Layout Design
6. Lean Transformation Initiative – Perjuangan Steel Group
7. Retail Operations Redesign with Statistical Quality Control
8. Feasibility Study – Manufacturing Relocation (NYC to Mexico)
9. Probabilistic Risk Management Using Monte Carlo Simulation

---

## Running Locally

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repo
git clone https://github.com/SamruddhMulmuley/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your EmailJS credentials in .env

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

Create a `.env` file in the root with the following:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your credentials at [emailjs.com](https://www.emailjs.com).

---

## Deployment

This site is deployed via **Vercel**. Every push to `main` triggers an automatic redeploy.

To deploy your own instance:
1. Fork this repo
2. Import into [vercel.com](https://vercel.com)
3. Add the environment variables above
4. Deploy

---

## Contact

**Samruddh Mulmuley**  
MS Industrial Engineering · New York University  
📧 sm12624@nyu.edu  
💼 [LinkedIn](https://linkedin.com/in/samruddhmulmuley)

---

*Built on top of the [JavaScript Mastery 3D Portfolio](https://github.com/adrianhajdin/3d-portfolio) template, fully redesigned and repurposed for an Industrial Engineering portfolio.*
