import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { getSubServiceDetails } from '../data/subServicesData';
import { servicesData } from '../data/servicesData';
import ConsultationForm from '../components/ConsultationForm';
import './SubServicePage.css';

export default function SubServicePage() {
  const { categorySlug, subServiceSlug } = useParams();
  const [data, setData] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    // Retrieve category display name
    if (categorySlug && servicesData[categorySlug]) {
      setCategoryName(servicesData[categorySlug].title);
    } else {
      setCategoryName("");
    }

    if (subServiceSlug) {
      // Find matching sub-service object to retrieve full display name if possible
      let displayName = "";
      if (categorySlug && servicesData[categorySlug]) {
        const found = servicesData[categorySlug].subServices.find(
          sub => sub.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === subServiceSlug
        );
        if (found) {
          displayName = found.name;
        }
      }
      
      const details = getSubServiceDetails(subServiceSlug, displayName);
      setData(details);
    }
  }, [categorySlug, subServiceSlug]);

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!data) {
    return (
      <div className="subservice-not-found">
        <h2>Sub-service Page Not Found</h2>
        <p>The details page you are searching for does not exist or has been relocated.</p>
        <Link to="/" className="back-home-btn">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="subservice-page">
      
      {/* Breadcrumbs Header */}
      <div className="subservice-breadcrumbs-container">
        <div className="subservice-breadcrumbs">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          {categorySlug && servicesData[categorySlug] ? (
            <>
              <Link to={`/services/${categorySlug}`}>{categoryName}</Link>
              <span className="breadcrumb-separator">/</span>
            </>
          ) : null}
          <span className="breadcrumb-active">{data.title}</span>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section className="subservice-hero">
        <div className="subservice-hero-container">
          <div className="subservice-hero-grid">
            <div className="subservice-hero-left">
              <span className="sub-badge">{data.tagline}</span>
              <h1 className="sub-title">{data.title}</h1>
              <p className="sub-subtitle">{data.subtitle}</p>
              
              <div className="sub-hero-stats">
                <div className="sub-stat-item">
                  <span className="sub-stat-number">{data.price}</span>
                  <span className="sub-stat-label">Professional Fee</span>
                </div>
                <div className="sub-stat-item">
                  <span className="sub-stat-number">
                    {data.pricingTable && data.pricingTable[0] ? data.pricingTable[0].timeline : "3-7 Days"}
                  </span>
                  <span className="sub-stat-label">Average Processing</span>
                </div>
              </div>

              <div className="sub-hero-actions">
                <button onClick={scrollToForm} className="sub-btn-primary">Register Online Now</button>
                <button onClick={scrollToForm} className="sub-btn-outline">Consult Experts</button>
              </div>
            </div>

            <div className="subservice-hero-right">
              <div className="quick-checklist-card">
                <h3>Pre-requisites Checklist</h3>
                <ul>
                  {data.documents && data.documents.slice(0, 3).map((doc, idx) => (
                    <li key={idx}>
                      <span className="checklist-bullet">{idx + 1}</span>
                      <div>
                        <strong>{doc.name}</strong>
                        <p>{doc.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Left Columns Details, Right Sidebar Sticky) */}
      <div className="sub-main-container">
        <div className="sub-layout-grid">
          
          {/* Left Column Content */}
          <div className="sub-content-left">
            
            {/* Section 1: Overview */}
            <section className="sub-section">
              <p className="intro-paragraph">{data.overview}</p>

              <h2>What is {data.title} in India?</h2>
              <p>
                Establishing a compliant <strong>{data.title}</strong> ensures that your business gains legal recognition and smooth banking access. Our compliance team coordinates name approvals, license filing, and tax documentation online.
              </p>

              <h3>Key Characteristics & Benefits</h3>
              <ul className="standard-list">
                {data.characteristics && data.characteristics.map((char, idx) => (
                  <li key={idx}>
                    <strong>{char.title}: </strong> {char.desc}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2: Eligibility */}
            <section className="sub-section">
              <h2>What is the Eligibility for {data.title} in India?</h2>
              <p>Before applying for registrations or licenses, ensure you satisfy the following standard criteria:</p>
              
              <ul className="standard-list">
                {data.eligibility && data.eligibility.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 3: Document Checklist */}
            <section className="sub-section">
              <h2>What is the Checklist Required for {data.title}?</h2>
              <p>Ensure you have scanned soft copies of these documents ready for registration:</p>

              <ul className="standard-list">
                {data.documents && data.documents.map((doc, idx) => (
                  <li key={idx}>
                    <strong>{doc.name}</strong> ({doc.type}) — {doc.desc}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4: Fees & Charges */}
            <section className="sub-section">
              <h2>What are the Registration Fees & Cost Structure?</h2>
              <p>Below is a transparent breakdown of government fees and professional advisory costs:</p>

              <div className="table-wrapper">
                <table className="indiafilings-table">
                  <thead>
                    <tr>
                      <th>Component / Fee Type</th>
                      <th>Government Fee</th>
                      <th>Professional Fee</th>
                      <th>Processing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.pricingTable && data.pricingTable.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.type}</td>
                        <td>{row.govFee}</td>
                        <td>{row.profFee}</td>
                        <td>{row.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Steps to Register */}
            <section className="sub-section">
              <h2>What are the Steps to Register Online?</h2>
              <p>Here is our simplified process flow for completing your registration online:</p>

              <ol className="ordered-list steps-list">
                {data.steps && data.steps.map((step, idx) => (
                  <li key={idx}>
                    <strong>{step.title}:</strong> {step.desc}
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 6: Post-Compliance */}
            <section className="sub-section">
              <h2>What are the Post-Registration Compliances?</h2>
              <p>To avoid interest charges and state penalties, make sure you comply with these recurring statutory return filing guidelines:</p>

              <ul className="standard-list">
                {data.compliance && data.compliance.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.name}: </strong> {item.desc}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: Why Choose Us */}
            <section className="sub-section">
              <h2>Why Choose CA.Saarthi?</h2>
              <p>We are a leading professional compliance network helping businesses register and scale seamlessly.</p>
              
              <ul className="standard-list">
                <li><strong>Expert Assistance:</strong> Handled by experienced Chartered Accountants and legal attorneys.</li>
                <li><strong>100% Transparent:</strong> Flat fee schedules with zero hidden charges.</li>
                <li><strong>End-to-End Tracking:</strong> Monitor your licensing status in real-time.</li>
              </ul>
            </section>

          </div>

          {/* Right Column Sticky Sidebar */}
          <div className="sub-sidebar-right">
            <div className="sidebar-sticky-panel">
              
              <div className="consult-experts-card">
                <h3>Need Assistance?</h3>
                <p>Talk directly to our Chartered Accountants for name approvals and license setups.</p>
                <button onClick={scrollToForm} className="sidebar-consult-btn">Consult Experts</button>
              </div>

              <div className="related-guides-card">
                <h4>Related Advisory Guides</h4>
                <ul>
                  <li><a href="#consultation-form">Comprehensive Registration Guide</a></li>
                  <li><a href="#consultation-form">Step-by-Step Business Licensing</a></li>
                  <li><a href="#consultation-form">Statutory Compliance Calendar</a></li>
                </ul>
              </div>

              <div className="states-cities-card">
                <h4>State-wise Licensing Guides</h4>
                <div className="states-list-scroll">
                  <a href="#consultation-form">Andhra Pradesh</a>
                  <a href="#consultation-form">Bihar</a>
                  <a href="#consultation-form">Delhi NCR</a>
                  <a href="#consultation-form">Gujarat</a>
                  <a href="#consultation-form">Karnataka</a>
                  <a href="#consultation-form">Maharashtra</a>
                  <a href="#consultation-form">Punjab</a>
                  <a href="#consultation-form">Tamil Nadu</a>
                  <a href="#consultation-form">Uttar Pradesh</a>
                  <a href="#consultation-form">West Bengal</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Booking form */}
      <div id="consultation-form" className="sub-form-wrapper">
        <ConsultationForm />
      </div>

    </div>
  );
}
