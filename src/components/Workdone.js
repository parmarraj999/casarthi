import react from 'react'
import './WorkDone.css';

function StatCard({ number, label, icon }) {
  return (
    <div className="stat-card">
      <p className="stat-number">{number}</p>
      <p className="stat-label">{label}</p>
      <img
        src={icon}
        alt=""
        className="stat-icon"
      />
    </div>
  );
}


export default function WorkDone() {
  const stats = [
    { number: "10K+", label: "Tax Return Filled", icon: '../../../../assets/images/startups.png' },
    { number: "1.2K+", label: "GST Clients", icon: '../../../../assets/images/startups.png' },
    { number: "1.6K", label: "Accounting & Billing Softwer Users", icon: '../../../../assets/images/startups.png' },
    { number: "2.8K+", label: "Registraton, Compliences & Registration", icon: '../../../../assets/images/startups.png' },
  ];

  return (
    <section className="work-done">
      <div className="work-done-container">
        <h2 className="work-done-title">Work Done</h2>

        <div className="work-done-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



