import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar bg-white dark:bg-gray-900 dark:text-white transition">
      <div className="navbar-left">
        {isHome && <span className="navbar-logo">Bienvenue !</span>}
      </div>

      <div className="navbar-right">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>

        {/* BOUTON MODE SOMBRE */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
