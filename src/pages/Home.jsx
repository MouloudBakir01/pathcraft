import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition">

      <div className="home-page">

        <section className="intro">

          {/* Photo en haut */}
          <div className="intro-photo">
            <img src="/mouloud.png" alt="Ma photo" className="profile-img" />
          </div>

          {/* Texte et boutons */}
          <div className="intro-content">
            <h1>Salut, je suis Mouloud BAKIR</h1>

            <p>
              Actuellement en 3ᵉ année de Bachelor Concepteur Développeur
              d’Applications à l’ETNA, je suis à la recherche d’une alternance
              afin de mettre en pratique mes compétences techniques et
              développer mon expérience professionnelle.  
              <br /><br />
              Ancien commercial dans une agence de communication, j’ai acquis
              une solide expérience dans la vente de prestations digitales,
              notamment la création de sites internet. Cette double expertise,
              commerciale et technique, me permet de comprendre à la fois les
              besoins clients et les solutions à apporter.  
              <br /><br />
              Extrêmement motivé et autonome, je suis prêt à contribuer
              activement aux projets de votre entreprise tout en continuant à
              progresser dans le développement web.
            </p>

            <div className="home-links">
              <Link to="/about" className="home-btn">À propos</Link>
              <Link to="/portfolio" className="home-btn">Portfolio</Link>
            </div>

            <a
              href="/Mouloud_BAKIR_CVetna1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn"
            >
              📄 Voir mon CV
            </a>
          </div>
        </section>

      </div>

    </div> 
  );
}
