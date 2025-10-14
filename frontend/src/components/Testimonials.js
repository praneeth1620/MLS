import React from 'react';
import { Star } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Their legal expertise and strategic approach were invaluable to our case. The team at MLS&Co is responsive, professional, and highly effective.",
      name: "John Doe",
      position: "CEO, Innovate Corp"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-content">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon" size={24} />
              ))}
            </div>
            <p className="testimonial-text">
              "{testimonials[0].text}"
            </p>
            <div className="testimonial-author">
              <p className="testimonial-name">{testimonials[0].name}</p>
              <p className="testimonial-position">{testimonials[0].position}</p>
            </div>
          </div>
          <div className="testimonials-dots">
            <div className="testimonial-dot active"></div>
            <div className="testimonial-dot"></div>
            <div className="testimonial-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
