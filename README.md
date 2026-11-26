# Arpita Singh - Business Analyst Intern Portfolio

A modern, responsive, single-page static portfolio website crafted for **Arpita Singh**, who is applying for **Business Analyst Intern** roles.

## 🌟 Key Features & Design Highlights

- **Corporate & Analytical Aesthetic:** Clean off-white/light slate canvas (`#F8FAFC`), crisp white cards (`#FFFFFF`), deep navy accents (`#0F172A` / `#1E3A8A`), and vibrant blue CTAs (`#2563EB`).
- **Typography:** Google Fonts pairing: **Plus Jakarta Sans** (headings & display metrics) and **Inter** (clean readable body prose).
- **Interactive Modals:**
  - **Case Study 1:** Retail Sales & Revenue Leakage Dashboard (SQL data cleaning, Power BI architecture, $142K margin recovery).
  - **Case Study 2:** E-Commerce Order Fulfillment Process Optimization (As-Is vs. To-Be BPMN mapping, 22% cycle time reduction).
  - **Case Study 3:** FinTech App Onboarding & KYC Drop-Off Reduction (Funnel analytics, Figma wireframes, FRD).
- **Print-Ready ATS Resume Viewer:** Interactive digital resume modal with a one-click "Print / Save PDF" feature (`window.print()`) configured with custom `@media print` rules for clean, un-cluttered 1-page printing.
- **Interactive BA Deliverables Showcase:** Live tabbed component previewing real Business Analyst artifacts:
  1. Production SQL query for negative-margin transaction anomaly detection.
  2. Agile User Story with INVEST criteria and Gherkin syntax (Given / When / Then).
  3. Requirements Traceability Matrix (RTM) table.
- **BA Methodology Lifecycle:** 4-step framework detailing Discovery & Elicitation, Modeling & Analysis, Specification & Alignment, and UAT Validation & Metric Tracking.
- **Responsive Navigation:** Glassmorphism sticky top bar (`backdrop-blur`) with mobile hamburger toggle.
- **Interactive Contact Form:** Validated contact form with simulated submission feedback and toast notifications.

---

## 📁 File Structure

```text
c:\devlopment\
├── index.html       # Primary semantic HTML5 single-page application
├── css/
│   └── style.css    # Custom styles, glassmorphism, animations, print media queries
├── js/
│   └── app.js       # Vanilla JS for modals, tabs, mobile menu, and form feedback
└── README.md        # Documentation and deployment guide
```

---

## 🚀 How to View Locally

Simply double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari).

Alternatively, you can run a local web server:

### Using Python:
```bash
# In the project directory:
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Using Node.js (npx serve):
```bash
npx serve .
```

---

## 🌐 Free 1-Click Deployment Options

1. **GitHub Pages:**
   - Push this directory to a GitHub repository.
   - Go to **Settings > Pages** and select the `main` branch.
2. **Netlify:**
   - Drag and drop the `c:\devlopment\` folder directly onto Netlify Drop.
3. **Vercel:**
   - Run `npx vercel` inside the folder.
