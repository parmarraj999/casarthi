import React from 'react';
import ConsultationForm from '../components/ConsultationForm';
import './ProprietorshipDetails.css';

export default function ProprietorshipDetails() {
  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="proprietorship-details-page">
      {/* Hero Header */}
      <section className="proprietorship-hero">
        <div className="proprietorship-hero-container">
          <div className="proprietorship-hero-grid">
            <div className="proprietorship-hero-left">
              <span className="prop-badge">SOLE PROPRIETORSHIP REGISTRATION</span>
              <h1 className="prop-title">Sole Proprietorship Firm Registration in India</h1>
              <p className="prop-subtitle">Register your sole proprietorship firm online under standard tax and municipal licenses with verified expert assistance.</p>
              
              <div className="prop-hero-stats">
                <div className="prop-stat-item">
                  <span className="prop-stat-number">₹1,499</span>
                  <span className="prop-stat-label">Professional Package</span>
                </div>
                <div className="prop-stat-item">
                  <span className="prop-stat-number">3-7 Days</span>
                  <span className="prop-stat-label">Average Processing Time</span>
                </div>
              </div>

              <div className="prop-hero-actions">
                <button onClick={scrollToForm} className="prop-btn-primary">Register Online Now</button>
                <button onClick={scrollToForm} className="prop-btn-outline">Consult Experts</button>
              </div>
            </div>
            <div className="proprietorship-hero-right">
              <div className="quick-checklist-card">
                <h3>Pre-requisites Checklist</h3>
                <ul>
                  <li>
                    <span className="checklist-bullet">1</span>
                    <div>
                      <strong>Proprietor PAN Card</strong>
                      <p>Personal PAN acts as the tax ID</p>
                    </div>
                  </li>
                  <li>
                    <span className="checklist-bullet">2</span>
                    <div>
                      <strong>Aadhaar / Voter ID</strong>
                      <p>Linked to active mobile number</p>
                    </div>
                  </li>
                  <li>
                    <span className="checklist-bullet">3</span>
                    <div>
                      <strong>Office Address Proof</strong>
                      <p>Electricity bill or rent agreement</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Left Content Column, Right Sidebar) */}
      <div className="prop-main-container">
        <div className="prop-layout-grid">
          
          {/* Left Column: Complete IndiaFilings Copy */}
          <div className="prop-content-left">
            
            {/* Section 1: Overview */}
            <section className="prop-section">
              <p className="intro-paragraph">
                A <strong>sole proprietorship firm</strong> is the simplest and most popular form of business in India, owned and managed by a single individual. It requires minimal compliance, low investment, and offers complete control to the owner. Whether you are a freelancer, trader, or small business owner, registering a sole proprietorship is the first step towards a legally recognized business identity.
              </p>

              <h2>What is Sole Proprietorship Firm Registration in India?</h2>
              <p>
                <strong>Sole proprietorship firm registration in India</strong> refers to the process by which an individual legally establishes a business under their own name or a trade name. Unlike a private limited company or LLP, a sole proprietorship does not require incorporation under the Companies Act. Instead, it gains legal recognition through registrations such as <strong>GST registration</strong>, <strong>MSME/Udyam registration</strong>, or a <strong>Shop and Establishment licence</strong>.
              </p>
              <p>
                A <strong>sole proprietor</strong> is personally responsible for all the liabilities and debts of the business. The business and the owner are considered the same legal entity, making it the most straightforward <strong>business registration for individuals</strong> in India.
              </p>

              <h3>Key Characteristics of Sole Proprietorship in India</h3>
              <ul className="standard-list">
                <li>Single ownership and full control by one person</li>
                <li>No separate legal entity from the owner</li>
                <li>Unlimited personal liability</li>
                <li>Easy to form with minimal formalities</li>
                <li>All profits and losses belong to the owner</li>
              </ul>
            </section>

            {/* Section 2: Eligibility */}
            <section className="prop-section">
              <h2>What is the Eligibility for Sole Proprietorship Firm Registration in India?</h2>
              <p>Before registering a <strong>sole proprietorship firm in India</strong>, it is important to understand the eligibility criteria. The following conditions must be met:</p>

              <h3>Basic Eligibility Criteria in India</h3>
              <ul className="standard-list">
                <li>The applicant must be an Indian citizen</li>
                <li>The applicant must be at least 18 years of age</li>
                <li>The applicant must have a valid PAN card</li>
                <li>The applicant must not be involved in any illegal business activity</li>
                <li>NRIs can also register a sole proprietorship with certain restrictions</li>
              </ul>

              <h3>Business Activity Eligibility in India</h3>
              <p>Any individual engaged in trading, manufacturing, or service-based activities can register as a <strong>sole proprietor firm in India</strong>. However, certain regulated industries may require additional licences or approvals from government authorities.</p>
            </section>

            {/* Section 3: Checklist */}
            <section className="prop-section">
              <h2>What is the Checklist Required for Sole Proprietorship Firm Registration in India?</h2>
              <p>Having the right documents ready ensures a smooth <strong>proprietorship firm registration online</strong> process. Below is a complete checklist:</p>

              <h3>Identity &amp; Address Proof Documents in India</h3>
              <ul className="standard-list">
                <li>PAN Card of the proprietor</li>
                <li>Aadhaar Card / Voter ID / Passport</li>
                <li>Passport-size photographs</li>
              </ul>

              <h3>Business Proof Documents in India</h3>
              <ul className="standard-list">
                <li>Business address proof (electricity bill, rent agreement)</li>
                <li>Bank account details in the name of the business</li>
                <li>Trade name or business name details</li>
              </ul>

              <h3>Registration Prerequisites in India</h3>
              <ul className="standard-list">
                <li>GST registration (if turnover exceeds threshold)</li>
                <li>MSME/Udyam registration certificate</li>
                <li>Shop and Establishment licence (state-specific)</li>
              </ul>
            </section>

            {/* Section 4: Fees & Penalties */}
            <section className="prop-section">
              <h2>What are the Sole Proprietorship Registration Fees &amp; Penalties in India?</h2>
              <p>The <strong>sole proprietorship registration cost in India</strong> varies depending on the type of registration chosen. Below is a detailed breakdown:</p>

              <h3>Registration Fee Structure in India</h3>
              <div className="table-wrapper">
                <table className="indiafilings-table">
                  <thead>
                    <tr>
                      <th>Registration Type</th>
                      <th>Government Fee</th>
                      <th>Professional Fee (Approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GST Registration</td>
                      <td>Free</td>
                      <td>₹500 – ₹2,000</td>
                    </tr>
                    <tr>
                      <td>MSME/Udyam Registration</td>
                      <td>Free</td>
                      <td>₹500 – ₹1,500</td>
                    </tr>
                    <tr>
                      <td>Shop &amp; Establishment Licence</td>
                      <td>₹100 – ₹1,000</td>
                      <td>₹1,000 – ₹3,000</td>
                    </tr>
                    <tr>
                      <td>Trade Licence</td>
                      <td>₹500 – ₹5,000</td>
                      <td>₹1,000 – ₹3,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Penalties for Non-Compliance in India</h3>
              <ul className="standard-list">
                <li><strong>GST non-registration penalty:</strong> 10% of tax due or ₹10,000, whichever is higher</li>
                <li><strong>Late GST return filing:</strong> ₹50 per day (₹20 for nil returns)</li>
                <li><strong>Non-filing of ITR:</strong> Penalty up to ₹5,000 under Section 234F</li>
              </ul>
            </section>

            {/* Section 5: Certificates */}
            <section className="prop-section">
              <h2>What is a Sole Proprietorship Registration Certificate in India?</h2>
              <p>A <strong>sole proprietorship certificate</strong> is an official document that proves the legal existence of your business. Since there is no single unified registration, the <strong>proprietorship registration certificate</strong> may be one or a combination of the following:</p>

              <h3>Types of Registration Certificates in India</h3>
              <ul className="standard-list">
                <li><strong>GST Registration Certificate</strong> – Issued by the GST department</li>
                <li><strong>Udyam Registration Certificate</strong> – Issued by the MSME Ministry</li>
                <li><strong>Shop &amp; Establishment Certificate</strong> – Issued by local municipal authorities</li>
              </ul>

              <h3>Importance of the Certificate in India</h3>
              <p>The <strong>proprietorship registration certificate</strong> is essential for opening a <strong>proprietorship bank account</strong>, applying for business loans, and entering into legal contracts. It also acts as proof of business identity for government tenders and schemes.</p>
            </section>

            {/* Section 6: Status Checks */}
            <section className="prop-section">
              <h2>How to Check Sole Proprietorship Registration Status in India?</h2>
              <p>Once you have applied for registration, you can track the <strong>sole proprietorship registration process</strong> status through the respective portals:</p>

              <h3>Check via GST Portal in India</h3>
              <ol className="ordered-list">
                <li>Visit the official GST portal at <strong>gst.gov.in</strong></li>
                <li>Click on "Track Application Status"</li>
                <li>Enter your ARN (Application Reference Number)</li>
                <li>View the current status of your GST registration</li>
              </ol>

              <h3>Check via MSME/Udyam Portal in India</h3>
              <ol className="ordered-list">
                <li>Visit <strong>udyamregistration.gov.in</strong></li>
                <li>Click on "Print/Verify Udyam Certificate"</li>
                <li>Enter your Udyam Registration Number and OTP</li>
                <li>Download and verify your <strong>Udyam registration proprietorship</strong> certificate</li>
              </ol>

              <h3>Check via Shop &amp; Establishment Portal in India</h3>
              <p>Visit your respective state's Labour Department portal and enter your application number to track the status of your <strong>shop and establishment registration</strong>.</p>
            </section>

            {/* Section 7: Process Flow Steps */}
            <section className="prop-section">
              <h2>What are the Steps to Register the Sole Proprietorship Firm in India?</h2>
              <p>Here is a simple step-by-step guide for <strong>how to register sole proprietorship</strong> in India:</p>

              <h3>Step-by-Step Registration Process in India</h3>
              <ol className="ordered-list steps-list">
                <li><strong>Step 1 – Choose a Business Name:</strong> Select a unique trade name for your <strong>sole proprietorship firm online registration</strong>. Ensure it does not infringe on any existing trademarks.</li>
                <li><strong>Step 2 – Obtain PAN Card:</strong> Apply for a PAN card in the proprietor's name. The <strong>sole proprietorship PAN card</strong> is mandatory for all tax-related activities.</li>
                <li><strong>Step 3 – Open a Current Bank Account:</strong> Open a current bank account in the name of the business for <strong>proprietorship bank account opening</strong>.</li>
                <li><strong>Step 4 – GST Registration:</strong> Apply for <strong>GST registration sole proprietorship</strong> if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states).</li>
                <li><strong>Step 5 – MSME/Udyam Registration:</strong> Register under the <strong>MSME registration for proprietorship</strong> to avail government benefits and subsidies.</li>
                <li><strong>Step 6 – Shop &amp; Establishment Licence:</strong> Obtain a <strong>shop and establishment registration</strong> from your local municipal authority.</li>
              </ol>
            </section>

            {/* Section 8: Additional Licenses */}
            <section className="prop-section">
              <h2>What are the Additional Registrations Required for a Sole Proprietorship Firm in India?</h2>
              <p>Depending on the nature of your business, additional registrations may be required for a <strong>sole proprietor firm in India</strong>:</p>

              <h3>FSSAI Registration in India</h3>
              <p>If you are involved in the food business, you must obtain an <strong>FSSAI licence</strong> from the Food Safety and Standards Authority of India.</p>

              <h3>Import Export Code (IEC) in India</h3>
              <p>For businesses involved in import or export activities, an <strong>Import Export Code (IEC)</strong> is mandatory from the DGFT.</p>

              <h3>Trade Licence in India</h3>
              <p>A <strong>trade licence proprietorship</strong> is required from local municipal authorities to conduct specific trade or business activities.</p>
            </section>

            {/* Section 9: Timelines */}
            <section className="prop-section">
              <h2>What is the Sole Proprietorship Registration Time in India?</h2>
              <p>The time taken to <strong>register a proprietorship india</strong> depends on the type of registration chosen:</p>

              <h3>Registration Timeline in India</h3>
              <div className="table-wrapper">
                <table className="indiafilings-table">
                  <thead>
                    <tr>
                      <th>Registration Type</th>
                      <th>Time Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GST Registration</td>
                      <td>3 – 7 Working Days</td>
                    </tr>
                    <tr>
                      <td>MSME/Udyam Registration</td>
                      <td>1 – 2 Working Days</td>
                    </tr>
                    <tr>
                      <td>Shop &amp; Establishment Licence</td>
                      <td>7 – 15 Working Days</td>
                    </tr>
                    <tr>
                      <td>Trade Licence</td>
                      <td>15 – 30 Working Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Compliances */}
            <section className="prop-section font-compliance-sec">
              <h2>What are the Post-Registration Compliance Requirements for Sole Proprietorship in India?</h2>
              <p>After completing the <strong>proprietorship business registration</strong>, the owner must adhere to the following compliance requirements:</p>

              <h3>Income Tax Return (ITR) Filing in India</h3>
              <p>A sole proprietor must file <strong>proprietorship income tax return</strong> under their individual PAN. The applicable ITR form is ITR-3 or ITR-4 (Sugam), depending on the nature of income. The due date is typically July 31st of each assessment year.</p>

              <h3>GST Return Filing in India</h3>
              <p>If registered under GST, the proprietor must file monthly or quarterly <strong>GST returns</strong> (GSTR-1, GSTR-3B) and an annual GST return (GSTR-9).</p>

              <h3>Other Statutory Compliances in India</h3>
              <ul className="standard-list">
                <li>Renewal of <strong>Shop &amp; Establishment licence</strong> annually</li>
                <li>Maintenance of proper books of accounts</li>
                <li>Tax Deducted at Source (TDS) compliance if applicable</li>
                <li>Professional tax payment (state-specific)</li>
              </ul>
            </section>

            {/* Section 11: Why Choose Us */}
            <section className="prop-section">
              <h2>Why Choose CA.Saarthi for Sole Proprietorship Firm Registration Services in India?</h2>
              <p>CA.Saarthi is India's leading <strong>business registration for individuals</strong> platform, helping thousands of entrepreneurs register their <strong>sole proprietorship firms</strong> every year.</p>

              <h3>Expert Assistance in India</h3>
              <ul className="standard-list">
                <li><strong>Experienced professionals</strong> with deep knowledge of <strong>proprietorship firm registration online</strong></li>
                <li>End-to-end support from documentation to certificate delivery</li>
                <li>Dedicated relationship manager for each client</li>
              </ul>

              <h3>Affordable &amp; Transparent Pricing in India</h3>
              <ul className="standard-list">
                <li>No hidden charges – transparent fee structure</li>
                <li>Cost-effective packages for <strong>small business registration india</strong></li>
                <li>Flexible payment options available</li>
              </ul>

              <h3>Fast &amp; Reliable Service in India</h3>
              <ul className="standard-list">
                <li>Quick turnaround time for all registrations</li>
                <li>Real-time tracking of your application status</li>
                <li>Trusted by corporate brands across India</li>
              </ul>
            </section>

          </div>

          {/* Right Column: Corporate Sticky Guides Sidebar (As on IndiaFilings) */}
          <div className="prop-sidebar-right">
            <div className="sidebar-sticky-panel">
              
              <div className="consult-experts-card">
                <h3>Need Assistance?</h3>
                <p>Talk directly to our Chartered Accountants for name approvals and license setups.</p>
                <button onClick={scrollToForm} className="sidebar-consult-btn">Consult Experts</button>
              </div>

              <div className="related-guides-card">
                <h4>Related Advisory Guides</h4>
                <ul>
                  <li><a href="#h2_7">Comprehensive Guide to Proprietorship Registration</a></li>
                  <li><a href="#h2_7">How to Start a Proprietorship: A Step-by-Step Guide</a></li>
                  <li><a href="#h2_1">Understanding Proprietorship: A Beginner's Guide</a></li>
                  <li><a href="#h2_4">How to Register a Proprietorship Company in 2026</a></li>
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

      {/* Embed Consultation Form */}
      <div id="consultation-form" className="prop-form-wrapper">
        <ConsultationForm />
      </div>
    </div>
  );
}
