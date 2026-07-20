import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: "Bachelor's in Computer Applications",
      institution: "Govt. Holkar Science College",
      period: "2023 - 2026",
      status: "Currently Pursuing",
      icon: "🎓",
      description: "Focused on software development, algorithms, and modern web technologies"
    },
    {
      degree: "10+2 (PCM Stream)",
      institution: "Little Angel's Convent H S School",
      period: "2012 - 2023",
      status: "Completed",
      icon: "📚",
      description: "Completed higher secondary education with Physics, Chemistry, and Mathematics"
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title gradient-text">Education</h2>
        
        <div className="timeline">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{edu.icon}</span>
              </div>
              
              <div className="timeline-content card">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <h4 className="education-institution">{edu.institution}</h4>
                  </div>
                  <span className={`education-status ${edu.status === 'Currently Pursuing' ? 'active' : ''}`}>
                    {edu.status}
                  </span>
                </div>
                
                <div className="education-period">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                  {edu.period}
                </div>
                
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
