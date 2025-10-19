// import React from 'react';
// import '../styles/Hero.css';

// const Hero = () => {
//   return (
//     <section className={`hero`} id='home'>
//       <div className="hero-content">
//           <h1 className="hero-title">
//             Men Legum Sanctitas
//           </h1>
//           <p className="hero-subtitle">
//             Driven by the Spirit of Justice, Guided by the Sanctity of Law
//           </p>
//         </div>
//     </section>
//   );
// };

// export default Hero;








import React from 'react';
import '../styles/Hero.css';

const Hero = ({ theme }) => {
  // theme should be either "light-theme" or "dark-theme"
  return (
    <section className={`hero ${theme}`} id='home'>
      <div className="hero-content">
        <h1 className="hero-title">
          MEN LEGATUM SANCTITAS
        </h1>
        <p className="hero-subtitle">
          Driven by the Spirit of Justice, Guided by the Sanctity of Law
        </p>
      </div>
    </section>
  );
};

export default Hero;

