import React from 'react';
import './Skills.css';

function Skills() {
  const skills = {
    frontend: [
      { name: 'HTML', level: 90, color: '#E34F26' },
      { name: 'CSS', level: 85, color: '#1572B6' },
      { name: 'JavaScript', level: 80, color: '#F7DF1E' },
      { name: 'Bootstrap', level: 75, color: '#7952B3' },
      { name: 'Tailwind', level: 70, color: '#06B6D4' }
    ],
    programming: [
      { name: 'C', level: 75, color: '#A8B9CC' },
      { name: 'C++', level: 70, color: '#00599C' },
      { name: 'Java', level: 65, color: '#007396' }
    ]
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title gradient-text">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">🎨</span>
              Frontend Skills
            </h3>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">💻</span>
              Programming Languages
            </h3>
            <div className="skills-list">
              {skills.programming.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item card"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="skills-highlight card">
          <div className="highlight-content">
            <h3>Currently Learning</h3>
            <p>
              Working on improving my React and Node skills. The CodSoft
              internship helped a lot with that, I built 4 full stack apps
              during it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
