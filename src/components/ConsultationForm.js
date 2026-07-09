import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Check } from 'lucide-react';
import './ConsultationForm.css';

export default function ConsultationForm() {
  // Form field states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    query: ''
  });

  // Validation error states
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Captcha states
  const [captchaState, setCaptchaState] = useState('unchecked'); // unchecked, loading, checked
  
  // Submit status states
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    "Company Registration",
    "GST Related",
    "Income Tax Return",
    "MSME/Udyog Aadhar",
    "Trademark Registration",
    "Food License/FSSAI",
    "Annual Filing Pvt Ltd/LLP",
    "Others"
  ];

  // Validation helper
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Contact number is required';
        } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
          error = 'Please enter a valid 10-digit number';
        }
        break;
      case 'category':
        if (!value) error = 'Please select a support category';
        break;
      case 'query':
        if (!value.trim()) {
          error = 'Query description is required';
        } else if (value.trim().length < 10) {
          error = 'Please describe your query in at least 10 characters';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For phone, only allow numbers and limit to 10 digits
    if (name === 'phone') {
      const cleanValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
      if (touched[name]) {
        const error = validateField(name, cleanValue);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const selectCategory = (category) => {
    setFormData(prev => ({ ...prev, category }));
    setTouched(prev => ({ ...prev, category: true }));
    setErrors(prev => ({ ...prev, category: '' }));
  };

  // Simulating Captcha verification
  const handleCaptchaClick = () => {
    if (captchaState !== 'unchecked') return;

    setCaptchaState('loading');
    setTimeout(() => {
      setCaptchaState('checked');
    }, 1500);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger validation for all fields
    const formErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) formErrors[key] = error;
    });

    setErrors(formErrors);
    
    // Set all fields as touched
    const touchedFields = {};
    Object.keys(formData).forEach(key => {
      touchedFields[key] = true;
    });
    setTouched(touchedFields);

    // Check captcha
    if (captchaState !== 'checked') {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    // If no errors, submit successfully
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      query: ''
    });
    setErrors({});
    setTouched({});
    setCaptchaState('unchecked');
    setIsSubmitted(false);
  };

  const isFormValid = 
    formData.name && 
    formData.email && 
    formData.phone && 
    formData.category && 
    formData.query &&
    captchaState === 'checked' &&
    !Object.values(errors).some(err => !!err);

  return (
    <section className="consultation-section" id="consultation-form">
      <div className="consultation-container">
        {isSubmitted ? (
          <div className="success-banner">
            <div className="success-icon-wrapper">
              <Check size={32} />
            </div>
            <h3 className="success-title">Consultation Booked!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Your query regarding <strong>{formData.category}</strong> has been received. Our expert financial team will call or email you shortly.
            </p>
            <button className="success-reset-btn" onClick={resetForm}>
              Submit Another Query
            </button>
          </div>
        ) : (
          <>
            <div className="consultation-header">
              <span className="consultation-tag">EXPERT GUIDANCE</span>
              <h2 className="consultation-title">
                Book Free Consultation Right Now
              </h2>
              <p className="consultation-subtitle">
                Fill in the form to connect with our CA and compliance specialists.
              </p>
            </div>

            <form className="consultation-form" onSubmit={handleSubmit} noValidate>
              
              {/* Row 1: Name and Email */}
              <div className="form-row">
                {/* Name Field */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name <span className="required-star">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input form-input-with-icon ${touched.name && errors.name ? 'error' : ''}`}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    />
                    <User className="input-icon" size={18} />
                  </div>
                  {touched.name && errors.name ? (
                    <span className="form-error-msg">{errors.name}</span>
                  ) : (
                    <span className="form-hint">Type your Good Name</span>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email <span className="required-star">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input form-input-with-icon ${touched.email && errors.email ? 'error' : ''}`}
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    />
                    <Mail className="input-icon" size={18} />
                  </div>
                  {touched.email && errors.email ? (
                    <span className="form-error-msg">{errors.email}</span>
                  ) : (
                    <span className="form-hint">Type your Valid Email</span>
                  )}
                </div>
              </div>

              {/* Contact Number Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Contact Number <span className="required-star">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input form-input-with-icon ${touched.phone && errors.phone ? 'error' : ''}`}
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  <Phone className="input-icon" size={18} />
                </div>
                {touched.phone && errors.phone ? (
                  <span className="form-error-msg">{errors.phone}</span>
                ) : (
                  <span className="form-hint">Insert Indian No without +91 or 0 (10 Digit Only)</span>
                )}
              </div>

              {/* Support Category Grid */}
              <div className="form-group">
                <label className="form-label">
                  Support Team Category <span className="required-star">*</span>
                </label>
                <div className="category-grid">
                  {categories.map((cat, index) => (
                    <div
                      key={index}
                      className={`category-pill ${formData.category === cat ? 'selected' : ''}`}
                      onClick={() => selectCategory(cat)}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
                {touched.category && errors.category && (
                  <span className="form-error-msg">{errors.category}</span>
                )}
              </div>

              {/* Detailed Query Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="query">
                  Query <span className="required-star">*</span>
                </label>
                <div className="input-wrapper align-start">
                  <textarea
                    id="query"
                    name="query"
                    rows="4"
                    className={`form-textarea form-input-with-icon ${touched.query && errors.query ? 'error' : ''}`}
                    placeholder="Describe your requirements in detail..."
                    value={formData.query}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  ></textarea>
                  <MessageSquare className="input-icon textarea-icon" size={18} />
                </div>
                {touched.query && errors.query ? (
                  <span className="form-error-msg">{errors.query}</span>
                ) : (
                  <span className="form-hint">Let us know your query in detail</span>
                )}
              </div>

              {/* Mock CAPTCHA widget */}
              <div className="form-group">
                <div className="captcha-container">
                  <div className="captcha-left" onClick={handleCaptchaClick}>
                    <div className="captcha-checkbox-wrapper">
                      <div className={`captcha-checkbox ${captchaState}`} />
                    </div>
                    <span className="captcha-label">I'm not a robot</span>
                  </div>
                  <div className="captcha-right">
                    <img 
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                      alt="reCAPTCHA logo" 
                      className="captcha-logo" 
                    />
                    <span className="captcha-logo-text">reCAPTCHA</span>
                    <span className="captcha-links">Privacy - Terms</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn"
                disabled={!isFormValid}
              >
                SUBMIT
              </button>

            </form>
          </>
        )}
      </div>
    </section>
  );
}
