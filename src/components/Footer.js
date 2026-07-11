import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Bio */}
          <div className="footer-col">
            <h3 className="footer-logo">CA<span>.Sarthi</span></h3>
            <p className="footer-about">
              A premium corporate advisory and taxation firm helping businesses, startups, and individuals manage their accounting, GST, income tax, and corporate compliance operations seamlessly.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/income-tax-services">Income Tax Services</Link></li>
              <li><Link to="/services/gst-services">GST Compliance</Link></li>
              <li><Link to="/services/accounting-bookkeeping">Accounting & Bookkeeping</Link></li>
              <li><Link to="/services/business-registration">Business Registrations</Link></li>
              <li><Link to="/services/startup-business-consulting">Startup Advisory</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>Head Office: Corporate Tower, Connaught Place, New Delhi, India</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>advisory@casarthi.in</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Disclaimer */}
          <div className="footer-col">
            <h4>Trust & Verification</h4>
            <p className="footer-disclaimer">
              CA.Sarthi is an independent corporate consulting platform led by certified professionals. All details shared are treated with absolute confidentiality under client-privilege compliance standards.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} CA.Sarthi. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy Policy</Link>
            <span>•</span>
            <Link to="/">Terms of Service</Link>
            <span>•</span>
            <Link to="/">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}