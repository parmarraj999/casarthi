import React from 'react'
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Your Reliable Financial Partner for Taxation, Compliance, Registration, and Business Growth Services
        </h2>
        <p className="hero-description">
          Simply fill up the details below related to your query and get connected with our experts immediately.
        </p>
        <a href="#consultation-form" className="hero-button">
          Book Free Consultation
        </a>
      </div>
    </div>
  );
}