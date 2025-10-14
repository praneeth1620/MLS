import React from 'react';
import { Gavel, Building2, Briefcase, Scale, Users, Lightbulb, Building, Home, Percent, Laptop, UserCheck } from 'lucide-react';
import '../styles/PracticeAreas.css';

const PracticeAreas = () => {
  const areas = [
    { icon: Gavel, title: 'Arbitration' },
    { icon: Building2, title: 'Banking & Finance' },
    { icon: Briefcase, title: 'Corporate & Commercial' },
    { icon: Scale, title: 'Dispute Resolution' },
    { icon: Users, title: 'Employment Law' },
    { icon: Lightbulb, title: 'Intellectual Property' },
    { icon: Building, title: 'Projects, Energy & Infrastructure' },
    { icon: Home, title: 'Real Estate' },
    { icon: Gavel, title: 'Restructuring & Insolvency' },
    { icon: Percent, title: 'Taxation' },
    { icon: Laptop, title: 'Technology, Media & Telecommunications' },
    { icon: UserCheck, title: 'White Collar Crime' },
  ];

  return (
    <section id="practice" className="practice-areas">
      <div className="practice-areas-container">
        <div className="practice-areas-header">
          <h2 className="practice-areas-title">Our Practice Areas</h2>
          <p className="practice-areas-subtitle">
            We offer a comprehensive range of legal services to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="practice-areas-grid">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="practice-card">
                <Icon className="practice-card-icon" size={40} />
                <h3 className="practice-card-title">{area.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
