import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'INCOME TAX', path: '/services/income-tax-services' },
    { name: 'GST', path: '/services/gst-services' },
    { name: 'ACCOUNTING', path: '/services/accounting-bookkeeping' },
    { name: 'BILLING SOFTWARE', path: '/services/digital-software-solutions' },
    { name: 'BANK LOAN', path: '/services/bank-loan-project-report' },
    { name: 'OTHER', path: '/services/startup-business-consulting' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CA<span>.Sarthi</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.path} 
              className={`navbar-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#consultation-form" className="navbar-cta-btn">
            Consult Now <ArrowRight size={14} style={{ marginLeft: '4px' }} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-drawer ${isOpen ? 'open' : ''}`}>
        <div className="navbar-drawer-content">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.path} 
              className={`navbar-drawer-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#consultation-form" className="navbar-drawer-cta">
            Consult Now
          </a>
        </div>
      </div>
    </nav>
  );
}
