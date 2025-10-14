import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Awards.css';

const Awards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const awards = [1, 2, 3, 4, 5];

  return (
    <section className="awards">
      <div className="awards-container">
        <div className="awards-header">
          <h2 className="awards-title">Awards & Accolades</h2>
          <p className="awards-subtitle">
            Recognized for excellence by leading legal publications.
          </p>
        </div>
        <div className="awards-carousel">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="awards-carousel-btn"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="awards-track">
            {awards.map((_, idx) => (
              <div key={idx} className="award-card">
                <Award className="award-icon" size={80} />
              </div>
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide(Math.min(awards.length - 1, currentSlide + 1))}
            className="awards-carousel-btn"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Awards;