import React from 'react'
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      {/* Navigation */}
      <nav className="hero-nav">
        <h1 className="hero-logo">CA.Sarthi</h1>
        <div className="hero-menu">
          <a href="#">INCOME TAX</a>
          <a href="#">GST</a>
          <a href="#">ACCOUNTING</a>
          <a href="#">BILLING SOFTWERE</a>
          <a href="#">BANK LOAN</a>
          <a href="#">OTHER</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h2 className="hero-title">
          Your Reliable Financial Partner for Taxation, Compliance, Registration, and Business Growth Services
        </h2>
        <p className="hero-description">
          Simply Fill-Up Below Details Related to your Query/Questions in Category
          <br />
          and Get Connect with Our Expert
        </p>
        <button className="hero-button">
          Book Now
        </button>
      </div>
    </div>
  );
}