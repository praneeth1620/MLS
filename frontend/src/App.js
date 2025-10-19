// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import PracticeAreas from "./components/PracticeAreas";
// import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonials";
// import Ourpeople from "./components/Ourpeople";
// import About from "./components/About"
// import Careers from "./components/Career"
// // Academics Pages
// import Blogs from "./components/Blogs";
// import Newsletters from "./components/Newsletters";
// import Publications from "./components/Publications";
// import Events from "./components/Events";


// function App() {
//   const [isDarkTheme, setIsDarkTheme] = useState(true);
//   const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

//   return (
//     <Router>
//       <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
//       <Routes>
//         {/* ✅ Home route showing all sections */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero isDarkTheme={isDarkTheme} />
//               <About/>
//               <PracticeAreas />
//               <Testimonials/>
//               <Ourpeople/>
//               <ContactForm />
//               <Footer />
//             </>
//           }
//         />
//         <Route path="/careers" element={<Careers />} />
//         {/* ✅ Academics pages open separately */}
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/newsletters" element={<Newsletters />} />
//         <Route path="/publications" element={<Publications />} />
//         <Route path="/events" element={<Events />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Ourpeople from "./components/Ourpeople";
import About from "./components/About";
import Careers from "./components/Career";

// Academics Pages
import Blogs from "./components/Blogs";
import Newsletters from "./components/Newsletters";
import Publications from "./components/Publications";
import Events from "./components/Events";
import Legacy from "./components/Legacy";

// ✅ Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <Router>
      <ScrollToTop />
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

      <Routes>
        {/* ✅ Home route showing all main sections */}
        <Route
          path="/"
          element={
            <>
              <Hero theme={isDarkTheme ? "dark-theme" : "light-theme"} />

              <About />
              <PracticeAreas />
              <Testimonials />
              <Ourpeople />
              <ContactForm />
              <Footer />
            </>
          }
        />

        {/* ✅ Separate pages */}
        <Route path="/legacy" element={<Legacy/>}/>
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
