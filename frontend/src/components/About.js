import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    const options = {
      threshold: 0.1, // triggers when 20% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('active');
        } else {
          aboutSection.classList.remove('active'); // remove if you want reset on scroll out
        }
      });
    }, options);

    if (aboutSection) observer.observe(aboutSection);

    // cleanup on unmount
    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div ref={aboutRef} className="about-container">
        <div className="about-text">
          <h2>About MLS&Co</h2>
          <p>
            MLS&Co is a premier full-service law firm in India, built on a
            foundation of excellence and integrity. We partner with clients to
            navigate complex legal and business landscapes, providing innovative
            solutions that address immediate challenges while creating long-term
            value. Our multidisciplinary team offers deep expertise across
            corporate law, dispute resolution, intellectual property, and more,
            combining local insight with a global perspective.
          </p>
          <p>
            Collaboration is central to our approach. We work closely with
            clients to deliver precise, practical, and strategically sound
            solutions. Driven by purpose and focused on the future, MLS&Co is
            your trusted legal partner, committed to shaping the legal landscape
            and fostering sustainable development for our clients and
            communities through advisory, litigation, and pro bono initiatives.
          </p>
          <a href="#history" className="about-link">
            Discover Our History →
          </a>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800"
            alt="Law books"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
