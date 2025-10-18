import React from 'react';
import { Award } from 'lucide-react';
import '../styles/Awards.css';

const Awards = () => {
  const awards = [1, 2, 3, 4, 5];
  return (
    <section className={`awards`}>
      <div className="awards-container">
        <div className="awards-header">
          <h2 className="awards-title">Academic Collaborations</h2>
          <p className="awards-subtitle">
            Recognized for excellence by leading legal publications.
          </p>
        </div>
        <div className="awards-marquee">
          <div className="awards-track">
            {[...awards, ...awards].map((_, idx) => (
              <div key={idx} className="award-card">
                <Award className="award-icon" size={80} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
