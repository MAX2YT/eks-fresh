import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About EKS Construction</h2>
          
          <div className="about-text">
            <p className="company-intro">
              <strong>EKS Construction</strong> is a leading construction company specializing in residential and
              commercial projects. We bring years of experience, skilled craftsmanship, and
              innovative solutions to every project.
            </p>
            
            <p className="company-mission">
              Our mission is simple: to build homes that bring happiness and create spaces where
              memories are made. We use only the finest materials and employ the most skilled
              professionals in the industry.
            </p>
            
            <button className="learn-more-btn">Learn More About Us →</button>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
          
          <div className="stat-item">
            <h3 className="stat-number">1000+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;