import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function AppContent({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  return (
    <>
      <Navbar 
        showTitle={location.pathname === "/"} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // applique / retire le dark mode au niveau HTML
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <AppContent 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)} 
      />
    </Router>
  );
}
