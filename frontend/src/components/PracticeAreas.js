import React, { useState } from 'react';
import {
  Gavel,
  Building2,
  Briefcase,
  Scale,
  Users,
  Lightbulb,
  Building,
  Home,
  Percent,
  Laptop,
  UserCheck,
  ShieldCheck,
  FileSearch,
  Globe,
  Leaf,
  FileCheck,
  Landmark
} from 'lucide-react';
import '../styles/PracticeAreas.css';

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = [
    {
      icon: Briefcase,
      title: 'Corporate and Commercial Law',
      description:
        'Our corporate and commercial law practice provides comprehensive legal support to businesses of all sizes.',
      points: [
        'Company formation, incorporation, and structuring under the Companies Act, 2013',
        'Mergers, acquisitions, and amalgamations including due diligence and drafting',
        'Drafting and negotiation of commercial contracts and agreements',
        'Corporate governance, compliance, and statutory filings',
        'Regulatory filings and approvals under SEBI, RBI, FEMA, and other authorities',
        'Joint ventures, collaborations, and strategic partnerships',
        'Private equity and venture capital financing transactions',
        'Securities law compliance, public offerings, and listings',
        'Corporate restructuring, demergers, and insolvency-related advisory'
      ]
    },
    {
      icon: Scale,
      title: 'Litigation and Dispute Resolution',
      description:
        'Our litigation and dispute resolution practice offers expert representation in civil, commercial, and regulatory disputes.',
      points: [
        'Civil and commercial litigation across courts and tribunals',
        'Arbitration and mediation for faster dispute resolution',
        'Contractual disputes and breach claims',
        'Real estate and property litigation',
        'Intellectual property enforcement',
        'Banking and financial disputes',
        'Insolvency and bankruptcy litigation',
        'Regulatory and compliance disputes',
        'Enforcement of judgments and arbitral awards'
      ]
    },
    {
      icon: Building2,
      title: 'Banking and Finance',
      description:
        'Our banking and finance practice provides expert legal advice on regulatory frameworks, transactional matters, and risk management.',
      points: [
        'Regulatory compliance under RBI, SEBI, and other financial authorities',
        'Loan and security documentation for corporate and retail lending',
        'Project finance and structured finance transactions',
        'Debt restructuring and recovery',
        'Trade finance and payment systems',
        'Investment funds and asset management advisory',
        'Regulatory approvals for banking products and services',
        'Risk management and enforcement of security interests',
        'Litigation and arbitration involving financial disputes'
      ]
    },
    {
      icon: Home,
      title: 'Real Estate and Infrastructure',
      description:
        'Our real estate and infrastructure practice offers legal services across property transactions, development projects, and compliance.',
      points: [
        'Property acquisitions and sales',
        'Leasing agreements and tenant representation',
        'Land use, zoning, and planning compliance',
        'Infrastructure project development and financing',
        'Real estate due diligence and title verification',
        'Construction contracts and dispute resolution',
        'Regulatory approvals for development projects',
        'Joint ventures and PPP models',
        'Real estate litigation and enforcement'
      ]
    },
    {
      icon: Users,
      title: 'Labour and Employment',
      description:
        'Our labour and employment practice advises employers and employees on all aspects of workplace law.',
      points: [
        'Employment contracts and policies drafting',
        'Workplace dispute resolution, mediation, and litigation',
        'Compliance with labour laws and industrial regulations',
        'Employee benefits and remuneration structuring',
        'Trade union negotiations and collective bargaining',
        'Employee discipline, termination, and grievances',
        'Health and safety compliance',
        'Discrimination and harassment claims',
        'Government labour inspections and audits'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Intellectual Property',
      description:
        'We help clients protect, manage, and enforce their intangible assets including patents, trademarks, and copyrights.',
      points: [
        'Patents, trademarks, copyrights, and design registrations',
        'IP licensing and commercialization agreements',
        'Enforcement against infringement and counterfeiting',
        'Trade secrets and confidential information protection',
        'IP due diligence for M&A and investments',
        'IP litigation and dispute resolution',
        'Portfolio management and valuation',
        'Counseling on international IP treaties and compliance'
      ]
    },
    {
      icon: Percent,
      title: 'Taxation',
      description:
        'We provide comprehensive tax advisory and compliance services for individuals and businesses.',
      points: [
        'Income tax, corporate tax, and capital gains advisory',
        'GST compliance and advisory',
        'Transfer pricing planning and documentation',
        'Tax structuring for M&A and reorganizations',
        'Representation before tax and GST authorities',
        'Tax litigation and appeals',
        'International taxation and cross-border planning',
        'Tax-efficient estate and succession planning'
      ]
    },
    {
      icon: Gavel,
      title: 'Insolvency and Bankruptcy',
      description:
        'We advise creditors and debtors through insolvency processes, restructuring, and recoveries.',
      points: [
        'Corporate insolvency resolution process (CIRP)',
        'Debt restructuring and workouts',
        'Liquidation and bankruptcy proceedings',
        'Representation of creditors and stakeholders',
        'Insolvency litigation and appeals',
        'Cross-border insolvency and restructuring'
      ]
    },
    {
      icon: Laptop,
      title: 'Startups & Venture Capital',
      description:
        'We support startups and investors through formation, funding, and growth stages.',
      points: [
        'Company formation and incorporation',
        'Fundraising and venture capital transactions',
        'Regulatory compliance for startups',
        'Stock option plans and employee incentives',
        'Commercial contracts and partnerships',
        'Exit strategies, mergers, and IPOs'
      ]
    },
    {
      icon: UserCheck,
      title: 'Private Client Services',
      description:
        'We provide estate planning, succession, and family law services for individuals and families.',
      points: [
        'Estate planning and wills drafting',
        'Trust creation and administration',
        'Succession and inheritance planning',
        'Family law matters including divorce and custody',
        'Property ownership and transfers',
        'Probate and estate administration'
      ]
    },
    {
      icon: FileSearch,
      title: 'Regulatory and Government Affairs',
      description:
        'We advise clients on compliance, policy matters, and interactions with government bodies.',
      points: [
        'Regulatory compliance across industries',
        'Government policy advisory and advocacy',
        'Licensing and permits',
        'Regulatory investigations and enforcement defense',
        'Public sector contracts and tenders',
        'Administrative law and tribunal representations'
      ]
    },
    {
      icon: Leaf,
      title: 'Environmental, Social & Governance (ESG)',
      description:
        'We counsel clients on ESG compliance, sustainability, and governance strategies.',
      points: [
        'ESG policy development and implementation',
        'Sustainability reporting and compliance',
        'Environmental regulation and permitting',
        'Social responsibility programs',
        'Corporate governance best practices'
      ]
    },
    {
      icon: FileCheck,
      title: 'Insurance and Reinsurance',
      description:
        'We advise on insurance coverage, claims, and regulatory compliance.',
      points: [
        'Insurance policy drafting and review',
        'Claims management and dispute resolution',
        'Reinsurance agreements and transactions',
        'Regulatory compliance in insurance sector',
        'Insurance coverage litigation'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Competition / Antitrust',
      description:
        'We advise clients on competition law compliance, merger control, and antitrust matters.',
      points: [
        'Competition law compliance audits',
        'Merger filings and approvals',
        'Anti-competitive conduct investigations',
        'Cartel defense and dawn raid support',
        'Competition litigation and appeals'
      ]
    },
    {
      icon: Landmark,
      title: 'Technology, Media & Telecommunication',
      description:
        'Our TMT practice supports clients in data protection, media, and telecom regulation.',
      points: [
        'IT outsourcing and software licensing',
        'Data privacy and cybersecurity compliance',
        'Telecom regulatory compliance and licensing',
        'Media rights and content contracts',
        'Technology commercialization agreements'
      ]
    },
    {
      icon: UserCheck,
      title: 'White Collar Crimes and Investigations',
      description:
        'We represent clients facing investigations, prosecutions, and compliance issues related to white collar crime.',
      points: [
        'Internal investigations and compliance audits',
        'Defense in criminal prosecutions',
        'Anti-corruption and bribery compliance',
        'Regulatory investigations and enforcement actions',
        'Litigation and settlement negotiations'
      ]
    },
    {
      icon: Globe,
      title: 'International Trade and Customs',
      description:
        'We advise clients on trade regulations, customs compliance, and dispute resolution.',
      points: [
        'Customs law and import/export compliance',
        'Trade sanctions and embargoes',
        'WTO and bilateral trade agreements',
        'Anti-dumping and countervailing duties',
        'Trade dispute resolution and litigation'
      ]
    },
    {
      icon: Building,
      title: 'Sector-Specific Advisory',
      description:
        'We offer specialized legal services tailored to industries such as healthcare, education, pharmaceuticals, and energy.',
      points: [
        'Healthcare regulatory compliance',
        'Education law and policy advisory',
        'Pharmaceutical licensing and litigation',
        'Energy project development and compliance',
        'Infrastructure PPP and government contracting'
      ]
    }
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
              <div
                key={index}
                className="practice-card"
                onClick={() => setSelectedArea(area)}
              >
                <Icon className="practice-card-icon" size={40} />
                <h3 className="practice-card-title">{area.title}</h3>
                <span className="hover-text">Click to view details</span>
              </div>
            );
          })}
        </div>

        {selectedArea && (
          <div
            className="practice-modal-overlay"
            onClick={() => setSelectedArea(null)}
          >
            <div
              className="practice-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedArea(null)}
              >
                ✕
              </button>
              <div className="modal-icon">
                {React.createElement(selectedArea.icon, {
                  size: 80,
                  color: '#FDB913'
                })}
              </div>
              <h2>{selectedArea.title}</h2>
              <p>{selectedArea.description}</p>
              <ul className="modal-points">
                {selectedArea.points.map((point, i) => (
                  <li  className="selected" key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticeAreas;
