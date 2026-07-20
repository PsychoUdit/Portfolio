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
                I'm <strong>Udit</strong>, a passionate software developer with a strong foundation 
                in <strong>Frontend Development</strong>. I love building efficient, user-friendly 
                applications and solving complex problems.
              </p>
              <p>
                My expertise includes <strong>HTML, CSS, JavaScript, Bootstrap & Tailwind</strong>, 
                and I'm always eager to learn and grow in the tech industry. I'm currently pursuing 
                my <strong>Bachelor's in Computer Applications</strong> at Govt. Holkar Science College.
              </p>
              <p>
                Let's connect and create something amazing!
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
            <div className="stat-value gradient-text">∞</div>
            <div className="stat-label">Passion for Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
