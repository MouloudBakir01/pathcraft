import React from "react";
import "../styles/about.css";

export default function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "Node.js", "Angular", "Tailwind", 
    "Bootstrap", "Python", "PHP", "Vue"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition">

      <div className="about-page">
        <h1>À propos de moi</h1>

        <div className="about-container">
          <div className="about-photo">
            <img src="/PhotoPro.png" alt="Ma photo" />
          </div>

          <div className="about-text">
            <p>
              Salut ! Je suis un développeur web passionné. J'aime créer des
              applications modernes et performantes.
            </p>

            <h2>Mes compétences :</h2>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
