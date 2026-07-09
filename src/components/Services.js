import './Services.css';

function ServiceCard({ title, image }) {
  return (
    <div className="service-card">
      <div className="service-card-image-container">
        <img src={image} alt={title} className="service-card-image" />
      </div>
      <h3 className="service-card-title">{title}</h3>
    </div>
  );
}

export default function Services() {
   const services = [
    { title: "Income Tax", image: '../../../../assets/images/income_tax.png' },
    { title: "GST", image: '../../../../assets/images/gst.png' },
    { title: "PROJECT REPORT & CMA", image: '../../../../assets/images/project-report.png' },
    { title: "BILLING SOFTWERE", image: '../../../../assets/images/billing.png' },
    { title: "BANK LOAN", image: '../../../../assets/images/bank-loan.png' },
    { title: "ACCOUNTINGS", image: '../../../../assets/images/accounting.png' },
    { title: "AUDITS", image: '../../../../assets/images/audits.png' },
    { title: "LEGAL & ADVOCACY", image: '../../../../assets/images/legal.png' },
    { title: "COMPANY & TRADEMARK", image: '../../../../assets/images/company.png' },
    { title: "STARTUPS", image: '../../../../assets/images/startups.png' },
    { title: "REGISTRATION", image: '../../../../assets/images/registration.png' },
    { title: "COMPLIENCE", image: '../../../../assets/images/complience.png' },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">
          Financial matters are best left to experts.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} image={service.image} />
          ))}

          {/* Other Services Card - spans full width on larger screens */}
          <div className="service-card other-services-card">
            <div className="service-card-image-container">
              {/* <img src={otherServicesImg} alt="Other Services" className="service-card-image" /> */}
            </div>
            <h3 className="service-card-title">OTHER SERVICES</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
