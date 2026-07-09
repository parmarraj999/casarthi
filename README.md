# CA.Sarthi — Premium CA & Advisory Portal

CA.Sarthi is a modern, premium, and trustworthy corporate advisory website built to assist businesses and individuals with company registrations, tax filings, audit assurance, legal agreements, and corporate compliance in India.

The portal features an elegant dark-slate and purple linear design system, responsive grids, and structured dynamic information panels similar to leading consulting firms like EY, PwC, Deloitte, and KPMG.

---

## 🚀 Key Features

- **Redesigned Service Grid**: Interactive, modern service category cards with clean 3D graphics, hover elevations, and customized icons.
- **Dynamic Multi-Level Routing**: Full URL routing powered by `react-router-dom`:
  - `/` — Core landing page containing the Hero banner, specialized categories, statistical trust meters, and booking form.
  - `/services/:slug` — Dedicated dynamic main categories overview (e.g. GST, ROC, Audit, Accounting).
  - `/services/:categorySlug/:subServiceSlug` — Deep dynamic child sub-services page displaying checklists, steps, timelines, and statutory guidelines.
- **Sole Proprietorship Bespoke Page**: Fully customized layout matching the exact content sections of *IndiaFilings* (PAN/Aadhaar document checklists, detailed pricing matrices, 6-step flow paths, and post-compliance guidelines).
- **Premium Consultation Form**: High-converting lead capturing system featuring side-by-side flex inputs, Lucide icons, responsive category selection badges, and error boundary states.
- **Persistent Layout Elements**: Fixed sticky header menu (`Navbar`) with dynamic routing states and a corporate 4-column `Footer` detailing bio descriptions, disclaimers, and links.

---

## 🛠️ Technology Stack

- **Frontend Core**: React.js (Create React App environment)
- **Routing**: React Router Dom (`react-router-dom`)
- **Styling**: Vanilla CSS (Responsive Flexbox and Grid models)
- **Icons**: Lucide React Icons (`lucide-react`)

---

## 📂 Project Directory Structure

```text
src/
├── components/
│   ├── ConsultationForm.js      # Booking lead form component
│   ├── ConsultationForm.css     # Responsive shadow and focus styles
│   ├── Footer.js                # 4-column corporate footer
│   ├── Footer.css               # Footer grids and disclaimer styling
│   ├── Hero.js                  # Hero tagline and action links
│   ├── Hero.css                 # Slate-navy gradient backdrop styling
│   ├── Navbar.js                # Sticky global header menu
│   ├── Navbar.css               # Header layouts and active state transitions
│   ├── Services.js              # Categories card list
│   └── Services.css             # Grid settings and hover zoom rules
├── data/
│   ├── servicesData.js          # Central database for 12 categories
│   └── subServicesData.js       # Checklists and timelines for sub-services
├── pages/
│   ├── HomePage.js              # Core landing route container
│   ├── ServicePage.js           # Sub-services categories page
│   ├── ServicePage.css          # timelines and accordion styles
│   ├── ProprietorshipDetails.js # IndiaFilings layout replication page
│   ├── ProprietorshipDetails.css# Table styling and sticky sidebar layouts
│   ├── SubServicePage.js        # Fallback rendering template
│   └── SubServicePage.css       # Subservices typography and spacing rules
├── App.js                       # Central Router mapping configurations
├── App.css                      # Global layout styling
└── index.js                     # App bootstrapping entry point
```

---

## 💻 Getting Started

Follow these steps to run the CA.Sarthi project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/parmarraj999/casarthi.git
cd casarthi
```

### 2. Install Dependencies
Perform a clean installation of all node modules:
```bash
npm ci
# or
npm install
```

### 3. Run Development Server
Start the local server. The application will launch on **[http://localhost:3000](http://localhost:3000)**:
```bash
npm start
```

### 4. Build for Production
Generate the production bundle inside the `build/` folder:
```bash
npm run build
```
