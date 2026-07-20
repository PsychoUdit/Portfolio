import React from 'react';
import './About.css';

function About() {
  const hobbies = [
    { name: 'Dance', icon: '💃' },
    { name: 'Skateboarding', icon: '🛹' },
    { name: 'Travelling', icon: '✈️' },
    { name: 'Music (HipHop, POP)', icon: '🎵' },
    { name: 'Podcasts', icon: '🎙️' }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title gradient-text">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card card">
              <h3>Who I Am</h3>
              <p>
                I'm <strong>Udit</strong>, a BCA student at Govt. Holkar Science College.
                I build websites mainly with <strong>HTML, CSS, JavaScript, React, Bootstrap
                and Tailwind</strong>.
              </p>
              <p>
                I did a web development internship at CodSoft where I built a few full
                stack projects (job board, blogging platform, calculator app and more).
                Currently working on improving my skills and making more projects.
              </p>
            </div>
          </div>
          
          <div className="about-hobbies">
            <div className="about-card card">
              <h3>Interests & Hobbies</h3>
              <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                  <div 
                    key={index} 
                    className="hobby-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="hobby-icon">{hobby.icon}</span>
                    <span className="hobby-name">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card card">
            <div className="stat-value gradient-text">2023</div>
            <div className="stat-label">Started BCA Journey</div>
          </div>
          <div className="stat-card card">
            <div className="stat-value gradient-text">5+</div>
            <div className="stat-label">Technologies Learned</div>
          </div>
          <div className="stat-card card">
            <div className="stat-value gradient-text">10+</div>
            <div className="stat-label">Mini Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
