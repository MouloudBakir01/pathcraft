import React from "react";
import "../styles/theme-toggle.css";

export default function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="toggle-wrapper">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider">
          <span className="sun">☀️</span>
          <span className="moon">🌙</span>
        </span>
      </label>
    </div>
  );
}


