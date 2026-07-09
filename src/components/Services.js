import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    { title: "BUSINESS REGISTRATION", slug: "business-registration", image: '../../../../assets/images/registration.png' },
    { title: "GST SERVICES", slug: "gst-services", image: '../../../../assets/images/gst.png' },
    { title: "INCOME TAX SERVICES", slug: "income-tax-services", image: '../../../../assets/images/income_tax.png' },
    { title: "ACCOUNTING & BOOKKEEPING", slug: "accounting-bookkeeping", image: '../../../../assets/images/accounting.png' },
    { title: "AUDIT & ASSURANCE", slug: "audit-assurance", image: '../../../../assets/images/audits.png' },
    { title: "ROC & COMPANY COMPLIANCE", slug: "roc-company-compliance", image: '../../../../assets/images/complience.png' },
    { title: "TRADEMARK & LEGAL", slug: "trademark-legal", image: '../../../../assets/images/legal.png' },
    { title: "HR & PAYROLL", slug: "hr-payroll", image: '../../../../assets/images/company.png' },
    { title: "LICENSE & CERTIFICATION", slug: "license-certification", image: '../../../../assets/images/other.png' },
    { title: "BANK LOAN & PROJECT REPORT", slug: "bank-loan-project-report", image: '../../../../assets/images/project-report.png' },
    { title: "STARTUP & BUSINESS CONSULTING", slug: "startup-business-consulting", image: '../../../../assets/images/startups.png' },
    { title: "DIGITAL & SOFTWARE SOLUTIONS", slug: "digital-software-solutions", image: '../../../../assets/images/billing.png' },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">
          Financial and legal matters are best left to experts. Click on any category to explore in detail.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={`/services/${service.slug}`} 
              className="service-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="service-card-image-container">
                <img src={service.image} alt={service.title} className="service-card-image" />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
