import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Legal Excellence. Redefined.
        </h1>
        <p className="hero-subtitle">
          A premier Indian law firm renowned for its integrity, expertise, and client-centric approach.
        </p>
        <button className="hero-cta">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Hero;