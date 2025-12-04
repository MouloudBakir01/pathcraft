import React, { useState } from "react";
import "../styles/portfolio.css";

export default function Portfolio() {
  // Liste des projets
  const projects = [
    {
      id: 1,
      title: "Contact - CRM",
      description: "CRM  réalisé avec Angular permettant de gérer une base locale de contact",
      image: "/angular.png",
      link: "https://tonsite.com/projet1",
      code: "https://github.com/MouloudBakir01/contact-crm"
    },
    {
      id: 2,
      title: "Site d'échange - Newsletter",
      description: "Site d'échanges (expériences, apprentissages) entres étudiants et jeunes professionels: mini blog réalisé avec react JS et typescript ",
      image: "/react1.png",
      link: "https://tonsite.com/projet2",
      code: "https://github.com/MouloudBakir01/blog-manager"
    },
    {
      id: 3,
      title: "To-do-Manager",
      description: "projet étudiant, To do list effectuée avec Vue.js",
      image: "/vue.png",
      link: "https://tonsite.com/projet3",
      code: "https://github.com/MouloudBakir01/To-Do-Manager"
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition">

      <div className="portfolio-page">
        <h1>Mes Projets</h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedProject.title}</h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />
              <p>{selectedProject.description}</p>

              <div className="modal-links">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>

                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-link"
                >
                  Voir le code
                </a>
              </div>

              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
