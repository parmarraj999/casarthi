import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { getSubServiceDetails } from '../data/subServicesData';
import { servicesData } from '../data/servicesData';
import ConsultationForm from '../components/ConsultationForm';
import ProprietorshipDetails from './ProprietorshipDetails';
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

  if (subServiceSlug === 'sole-proprietorship-registration') {
    return <ProprietorshipDetails />;
  }

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
      {/* 1. Header Breadcrumbs */}
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

      {/* 2. Premium Hero Section */}
      <section className="subservice-hero">
        <div className="subservice-hero-container">
          <div className="subservice-hero-grid">
            <div className="subservice-hero-left">
              <span className="subservice-hero-badge">{data.tagline}</span>
              <h1 className="subservice-hero-title">{data.title}</h1>
              <p className="subservice-hero-desc">{data.subtitle}</p>
              
              <div className="subservice-hero-features">
                <div className="subservice-hero-feat-item">
                  <Icons.CheckCircle size={18} className="text-emerald" />
                  <span>100% Online & Hassle-Free Filing</span>
                </div>
                <div className="subservice-hero-feat-item">
                  <Icons.CheckCircle size={18} className="text-emerald" />
                  <span>Verified CA & Legal Experts Consultancy</span>
                </div>
                <div className="subservice-hero-feat-item">
                  <Icons.CheckCircle size={18} className="text-emerald" />
                  <span>No Hidden Charges</span>
                </div>
              </div>

              <div className="subservice-hero-actions">
                <button onClick={scrollToForm} className="subservice-hero-btn-primary">
                  Register Online Now
                </button>
                <button onClick={scrollToForm} className="subservice-hero-btn-secondary">
                  Talk to Specialist
                </button>
              </div>
            </div>

            <div className="subservice-hero-right">
              <div className="subservice-pricing-card">
                <div className="pricing-card-header">
                  <h3>Professional Assistance</h3>
                  <p>All-inclusive legal submission package</p>
                </div>
                <div className="pricing-card-price-section">
                  <span className="pricing-price-tag">{data.price}</span>
                  <span className="pricing-price-period">onwards</span>
                </div>
                <div className="pricing-card-divider"></div>
                <ul className="pricing-card-list">
                  <li>
                    <Icons.Check size={16} /> Name Approval & Documentation
                  </li>
                  <li>
                    <Icons.Check size={16} /> Government Portal Submissions
                  </li>
                  <li>
                    <Icons.Check size={16} /> Dedicated Relationship Officer
                  </li>
                  <li>
                    <Icons.Check size={16} /> Digital Copy Delivery
                  </li>
                </ul>
                <button onClick={scrollToForm} className="pricing-card-action-btn">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Overview Section */}
      <section className="subservice-overview-sec">
        <div className="subservice-section-container">
          <div className="overview-grid">
            <div className="overview-left-desc">
              <span className="section-pre-title">OVERVIEW</span>
              <h2>What is {data.title}?</h2>
              <p className="overview-para">{data.overview}</p>
              
              <div className="eligibility-card">
                <h3>Eligibility Criteria</h3>
                <ul className="eligibility-list">
                  {data.eligibility.map((item, idx) => (
                    <li key={idx}>
                      <Icons.CheckSquare size={18} className="eligibility-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overview-right-chars">
              <h3>Key Characteristics</h3>
              <div className="characteristics-list">
                {data.characteristics.map((char, idx) => (
                  <div key={idx} className="char-item-card">
                    <div className="char-item-icon-bubble">
                      <Icons.Star size={18} />
                    </div>
                    <div>
                      <h4>{char.title}</h4>
                      <p>{char.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Document Checklist Section */}
      <section className="documents-checklist-sec">
        <div className="subservice-section-container">
          <div className="section-header-left">
            <span className="section-pre-title">DOCUMENTATION</span>
            <h2>Required Checklist & Proofs</h2>
            <p>Ensure you have these scanned copies ready to fast-track your registration process.</p>
          </div>

          <div className="documents-grid">
            {data.documents.map((doc, idx) => (
              <div key={idx} className="document-card">
                <div className="document-card-top">
                  <div className="document-icon-badge">
                    <Icons.FileText size={22} />
                  </div>
                  <span className="document-category-tag">{doc.type}</span>
                </div>
                <h4 className="document-name">{doc.name}</h4>
                <p className="document-desc">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing, Fees & Timeline Schedule */}
      <section className="pricing-fees-sec">
        <div className="subservice-section-container">
          <div className="section-header-left">
            <span className="section-pre-title">FEES & TIMELINE</span>
            <h2>Transparent Charges & Duration</h2>
            <p>We believe in 100% transparency. Here is the approximate fee schedule and government processing timelines.</p>
          </div>

          <div className="table-responsive-container">
            <table className="fees-schedule-table">
              <thead>
                <tr>
                  <th>Component / Registration Type</th>
                  <th>Government Fees</th>
                  <th>Professional Consultation</th>
                  <th>Timeline / Duration</th>
                </tr>
              </thead>
              <tbody>
                {data.pricingTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="table-highlight-cell">{row.type}</td>
                    <td>{row.govFee}</td>
                    <td>{row.profFee}</td>
                    <td className="table-timeline-cell">
                      <Icons.Clock size={14} />
                      <span>{row.timeline}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Step-by-Step Registration Process */}
      <section className="subservice-steps-sec">
        <div className="subservice-section-container">
          <div className="section-header-centered-dark">
            <span className="section-pre-title">PROCESS FLOW</span>
            <h2>Steps to Register Online</h2>
            <p>Our online portal makes registration quick and stress-free. Here is the step-by-step procedure.</p>
          </div>

          <div className="steps-flow-timeline">
            {data.steps.map((step, idx) => (
              <div key={idx} className="step-flow-card">
                <div className="step-flow-bubble">
                  {idx + 1}
                </div>
                <h4 className="step-flow-title">{step.title}</h4>
                <p className="step-flow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Post-Registration Compliance Checklist */}
      <section className="post-compliance-sec">
        <div className="subservice-section-container">
          <div className="compliance-banner-card">
            <div className="compliance-banner-left">
              <span className="compliance-banner-tag">COMPLIANCE</span>
              <h2>Post-Registration Guidelines</h2>
              <p>Registering your business is the first step. To maintain your active legal status, make sure you manage these annual compliance guidelines.</p>
            </div>
            
            <div className="compliance-banner-right">
              {data.compliance.map((item, idx) => (
                <div key={idx} className="compliance-banner-item">
                  <div className="compliance-item-check">
                    <Icons.ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Consultation Form */}
      <div id="consultation-form" className="subservice-form-wrapper">
        <ConsultationForm />
      </div>
    </div>
  );
}
