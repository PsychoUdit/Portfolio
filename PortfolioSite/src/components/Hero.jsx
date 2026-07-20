import React from 'react';
import './Hero.css';


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particle particle-1"></div>
        <div className="hero-particle particle-2"></div>
        <div className="hero-particle particle-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting animate-fadeInUp">
            <span className="wave">👋</span> Hi, I'm
          </div>
          
          <h1 className="hero-name animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Udit Chouhan
          </h1>
          
          <div className="hero-title animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <span className="typing-text">Frontend Developer</span>
          </div>
          
          <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            Passionate software developer with a strong foundation in Frontend Development. 
            I love building efficient, user-friendly applications and solving complex problems.
          </p>
          
          <div className="hero-buttons animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          
          <div className="hero-socials animate-fadeInUp" style={{ animationDelay: '1s' }}>
            <div className="social-links">
              <a href="mailto:Uditchouhan30102004@gmail.com" className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:6265119262" className="social-link" aria-label="Phone">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-avatar-wrapper animate-float">
            <div className="avatar-glow"></div>
            <div className="hero-avatar">
              <img src="/PFP.jpg" alt="Profile" className="avatar-image" />
            </div>
          </div>
          
          <div className="floating-skills">
            <div className="skill-badge" style={{ animationDelay: '0s' }}>HTML</div>
            <div className="skill-badge" style={{ animationDelay: '0.2s' }}>CSS</div>
            <div className="skill-badge" style={{ animationDelay: '0.4s' }}>JavaScript</div>
            <div className="skill-badge" style={{ animationDelay: '0.6s' }}>React</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
