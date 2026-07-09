import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ConsultationForm from '../components/ConsultationForm';
import './ServicePage.css';

// Helper to render Lucide icons dynamically from a string name
function DynamicIcon({ name, size = 24, className = "" }) {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent size={size} className={className} />;
}

export default function ServicePage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Scroll to top on route navigation
    window.scrollTo(0, 0);
    
    if (slug && servicesData[slug]) {
      setService(servicesData[slug]);
    } else {
      setService(null);
    }
  }, [slug]);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Category Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="back-home-btn">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="service-page">
      {/* 1. Hero Section */}
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <span className="service-category-tag">OUR SERVICES</span>
            <h1 className="service-hero-title">{service.title}</h1>
            <p className="service-hero-desc">{service.shortDescription}</p>
            <button onClick={scrollToForm} className="service-hero-btn">
              Book Consultation Now
            </button>
          </div>
        </div>
      </section>

      {/* 2. Attractive Banner Section */}
      <section className="service-banner-sec">
        <div className="service-banner-container">
          <div className="service-banner-card">
            <h3>{service.bannerText}</h3>
            <p>Connect with our top Chartered Accountants and industry legal experts to streamline your compliance operations.</p>
          </div>
        </div>
      </section>

      {/* 3. Sub-services Cards Grid */}
      <section className="subservices-sec">
        <div className="subservices-container">
          <div className="section-header-centered">
            <h2>Detailed Services We Offer</h2>
            <p>Select from our comprehensive list of expert solutions designed for business growth and regulatory peace of mind.</p>
          </div>

          <div className="subservices-grid">
            {service.subServices.map((sub, idx) => (
              <div key={idx} className="subservice-card">
                <div className="subservice-icon-wrapper">
                  <DynamicIcon name={sub.icon} size={28} className="subservice-icon" />
                </div>
                <h3 className="subservice-title">{sub.name}</h3>
                <p className="subservice-desc">{sub.description}</p>
                <button onClick={scrollToForm} className="subservice-action-link">
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="why-choose-sec">
        <div className="why-choose-container">
          <div className="why-choose-grid">
            <div className="why-choose-intro">
              <h2>Why Choose CA.Sarthi?</h2>
              <p>We combine cutting-edge financial tech with decades of legal expertise to give your firm an operational advantage.</p>
              <div className="why-choose-stats">
                <div className="stat-item">
                  <span className="stat-num">99.8%</span>
                  <span className="stat-txt">Compliance Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">15K+</span>
                  <span className="stat-txt">Happy Clients</span>
                </div>
              </div>
            </div>
            
            <div className="why-choose-list">
              {service.whyChooseUs.map((item, idx) => (
                <div key={idx} className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <Icons.CheckCircle size={20} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Timeline Section */}
      <section className="timeline-sec">
        <div className="timeline-container">
          <div className="section-header-centered">
            <h2>How It Works</h2>
            <p>Our streamlined four-step advisory process gets you results with zero hassle.</p>
          </div>

          <div className="process-timeline">
            {service.timeline.map((step, idx) => (
              <div key={idx} className="timeline-step">
                <div className="step-number-bubble">
                  {idx + 1}
                </div>
                <div className="step-content">
                  <h4>Step {idx + 1}</h4>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="faq-sec">
        <div className="faq-container">
          <div className="faq-intro">
            <h2>Frequently Asked Questions</h2>
            <p>Have questions about {service.title}? Here are answers to the most common queries we receive.</p>
          </div>

          <div className="faq-list">
            {service.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item-accordion ${activeFaq === idx ? 'expanded' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-bar">
                  <h4>{faq.question}</h4>
                  <span className="faq-arrow-icon">
                    <Icons.ChevronDown size={20} />
                  </span>
                </div>
                <div className="faq-answer-panel">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-Action Section with Form */}
      <section className="cta-form-sec">
        <div className="cta-form-container">
          <div className="cta-banner">
            <h2>Ready to secure your business compliance?</h2>
            <p>Connect with our Chartered Accountants today. Get 100% transparent advice and customized quotes.</p>
            <button onClick={scrollToForm} className="cta-scroll-btn">
              Fill Consultation Form
            </button>
          </div>
        </div>
      </section>

      {/* Embed Consultation Form */}
      <ConsultationForm />
    </div>
  );
}
