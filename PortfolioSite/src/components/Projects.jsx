  import React from 'react';
import './Projects.css';
import fitness from './assets/24fitness.png';
import menu from ' ./assets/menu.jpg

function Projects() {
  const projects = [
    {
      id: 1,
      title: "A Gym Intro Landing Page",
      description: "I built a real world landing page  for My Gym in my first year of college to try my newly learnt frontend skills",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: fitness ,
      liveLink: "24-fitness.vercel.app",
      codeLink: "https://github.com/PsychoUdit/24-Fitness"
    },
    {
      id: 2,
      title: "Dine In Menu",
      description: "A interactive dine in menu for a nice restaurant i personally visited and delivered them a QR menu landing to digitise there Buisness.",
      technologies: ["React", "API", "CSS"],
      image: menu, 
      liveLink: "Pavilion-dine-menu.vercel.app",
      codeLink: "https://github.com/PsychoUdit/pavilion-dine-menu"
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        
        <p className="projects-subtitle">
          Here are some of my recent works that showcase my skills and passion for development
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <svg viewBox="0 0 200 200" fill="none">
                      <rect width="200" height="200" fill="url(#projectGrad)"/>
                      <circle cx="100" cy="80" r="30" fill="rgba(255,255,255,0.1)"/>
                      <rect x="70" y="120" width="60" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
                      <rect x="60" y="135" width="80" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
                      <defs>
                        <linearGradient id="projectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#d4a574', stopOpacity: 0.3}} />
                          <stop offset="100%" style={{stopColor: '#c4956b', stopOpacity: 0.3}} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="placeholder-text">Add Project Screenshot</p>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
