const fs = require('fs');
const path = require('path');

// Define the directory structure
const directories = [
  'src/components',
  'src/styles',
  'src/assets',
  'src/utils',
  'public/videos',
  'public/images'
];

// Define the files to create
const files = [
  'src/components/Header.js',
  'src/components/HeroSection.js',
  'src/components/AboutSection.js',
  'src/components/ContactSection.js',
  'src/components/Footer.js',
  'src/styles/Header.css',
  'src/styles/HeroSection.css',
  'src/styles/AboutSection.css',
  'src/styles/ContactSection.css',
  'src/styles/Footer.css',
  'src/styles/globals.css',
  'src/utils/constants.js'
];

// File contents templates
const fileContents = {
  'src/components/Header.js': `import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('HOME');

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'PACKAGES', 'OUR TEAM', 'CAREERS', 'CONTACT'];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-circle">
              <span className="logo-text">EKS</span>
            </div>
          </div>
          <div className="logo-content">
            <h1 className="company-name">eks construction</h1>
            <p className="company-tagline">Feel the happiness in your Home</p>
          </div>
        </div>
        
        <nav className="navbar">
          {navItems.map((item) => (
            <button
              key={item}
              className={\`nav-item \${activeNav === item ? 'active' : ''}\`}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;`,

  'src/components/HeroSection.js': `import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">EKS Construction</h1>
        <p className="hero-subtitle">Feel the happiness in your Home</p>
        <p className="hero-description">
          We are expert home construction contractors dedicated to building your dream home with
          quality, precision, and care. Your happiness is our success.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">OUR SERVICES</button>
          <button className="btn-secondary">GET QUOTE</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;`,

  'src/components/AboutSection.js': `import React from 'react';
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

export default AboutSection;`,

  'src/components/ContactSection.js': `import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Ready to Start Your Project?</h2>
        <p className="contact-subtitle">
          Contact us today for a free consultation and let's build your dream together.
        </p>
        
        <div className="contact-methods">
          <div className="contact-item">
            <div className="contact-icon call-icon">📱</div>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon email-icon">📧</div>
            <h3>Email Us</h3>
            <p>info@eksconstruction.com</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon location-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Your City, India</p>
          </div>
        </div>
        
        <button className="get-in-touch-btn">GET IN TOUCH</button>
      </div>
    </section>
  );
};

export default ContactSection;`,

  'src/components/Footer.js': `import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3>EKS Construction</h3>
          <p className="footer-tagline">Feel the happiness in your Home</p>
          <p className="footer-description">
            Home Construction Experts | Best Building Contractors
          </p>
          <p className="footer-description">
            Building your dreams with quality and excellence since 2010.
          </p>
          
          <div className="social-icons">
            <div className="social-icon twitter">🐦</div>
            <div className="social-icon instagram">📷</div>
            <div className="social-icon youtube">📺</div>
            <div className="social-icon linkedin">💼</div>
          </div>
        </div>
        
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section services">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#residential">Residential Construction</a></li>
            <li><a href="#commercial">Commercial Buildings</a></li>
            <li><a href="#interior">Interior Design</a></li>
            <li><a href="#architectural">Architectural Planning</a></li>
            <li><a href="#project">Project Management</a></li>
            <li><a href="#renovation">Renovation & Remodeling</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <div className="contact-detail">
            <span className="contact-icon">📧</span>
            <span>info@eksconstruction.com</span>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">📱</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">📞</span>
            <span>+91 80123 45678</span>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">📍</span>
            <span>
              123 Construction Avenue<br />
              Your City, State 123456<br />
              India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`,

  'src/styles/globals.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

html {
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}`,

  'src/styles/Header.css': `.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  position: relative;
}

.logo-circle {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #4169E1, #6495ED);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logo-circle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border-radius: 50%;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  z-index: -1;
}

.logo-text {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.logo-content {
  display: flex;
  flex-direction: column;
}

.company-name {
  color: #4169E1;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-transform: lowercase;
}

.company-tagline {
  color: #FF6B6B;
  font-size: 0.75rem;
  margin: 0;
  font-style: italic;
}

.navbar {
  display: flex;
  gap: 0.5rem;
}

.nav-item {
  padding: 0.75rem 1.25rem;
  background: transparent;
  color: #333;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: #f0f0f0;
  color: #4169E1;
}

.nav-item.active {
  background: #4169E1;
  color: white;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navbar {
    flex-wrap: wrap;
    justify-content: center;
  }
}`,

  'src/styles/HeroSection.css': `.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.video-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(65, 105, 225, 0.8), rgba(100, 149, 237, 0.8));
  z-index: -1;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #FFB6C1;
  font-style: italic;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: #4169E1;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 1rem 2.5rem;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: white;
  color: #4169E1;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}`,

  'src/styles/AboutSection.css': `.about-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-title {
  color: #4169E1;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.about-text {
  color: #666;
  line-height: 1.8;
}

.company-intro {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.company-intro strong {
  color: #333;
}

.company-mission {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.learn-more-btn {
  color: #4169E1;
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.learn-more-btn:hover {
  color: #2E4BC6;
}

.stats-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-number {
  color: #4169E1;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
}

@media (max-width: 968px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .stats-section {
    flex-direction: row;
    justify-content: space-around;
  }
  
  .stat-item {
    flex: 1;
    margin: 0 0.5rem;
  }
}

@media (max-width: 768px) {
  .stats-section {
    flex-direction: column;
  }
  
  .stat-item {
    margin: 0;
  }
}`,

  'src/styles/ContactSection.css': `.contact-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #4169E1, #6495ED);
  color: white;
  text-align: center;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.contact-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-item h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.contact-item p {
  font-size: 1rem;
  opacity: 0.9;
}

.get-in-touch-btn {
  background: white;
  color: #4169E1;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.get-in-touch-btn:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .contact-methods {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}`,

  'src/styles/Footer.css': `.footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
  gap: 2rem;
}

.footer-section h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-section h4 {
  color: #6495ED;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-tagline {
  color: #FFB6C1;
  font-style: italic;
  margin-bottom: 1rem;
}

.footer-description {
  color: #bbb;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: #4169E1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.social-icon:hover {
  background: #6495ED;
}

.footer-section ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-section ul li a {
  color: #bbb;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #6495ED;
}

.contact-detail {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #bbb;
}

.contact-detail .contact-icon {
  margin-top: 0.2rem;
}

@media (max-width: 968px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .contact-detail {
    justify-content: center;
  }
}`,

  'src/utils/constants.js': `export const COMPANY_INFO = {
  name: 'EKS Construction',
  tagline: 'Feel the happiness in your Home',
  description: 'Home Construction Experts | Best Building Contractors',
  phone: '+91 98765 43210',
  phone2: '+91 80123 45678',
  email: 'info@eksconstruction.com',
  address: '123 Construction Avenue, Your City, State 123456, India'
};

export const NAVIGATION_ITEMS = [
  'HOME', 'ABOUT', 'SERVICES', 'PACKAGES', 'OUR TEAM', 'CAREERS', 'CONTACT'
];

export const SERVICES = [
  'Residential Construction',
  'Commercial Buildings',
  'Interior Design',
  'Architectural Planning',
  'Project Management',
  'Renovation & Remodeling'
];

export const STATS = {
  experience: '15+',
  clients: '500+',
  projects: '1000+'
};`
};

// Create directories
function createDirectories() {
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    } else {
      console.log(`📁 Directory already exists: ${dir}`);
    }
  });
}

// Create files
function createFiles() {
  files.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      const content = fileContents[filePath] || '';
      fs.writeFileSync(filePath, content);
      console.log(`✅ Created file: ${filePath}`);
    } else {
      console.log(`📄 File already exists: ${filePath}`);
    }
  });
}

// Update App.js
function updateAppJs() {
  const appJsContent = `import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;`;

  if (fs.existsSync('src/App.js')) {
    fs.writeFileSync('src/App.js', appJsContent);
    console.log('✅ Updated App.js');
  }
}

// Update package.json to include dependencies
function updatePackageJson() {
  const packageJsonPath = 'package.json';
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add additional dependencies if needed
    const additionalDependencies = {
      "@testing-library/jest-dom": "^5.16.4",
      "@testing-library/react": "^13.3.0",
      "@testing-library/user-event": "^13.5.0"
    };

    packageJson.dependencies = {
      ...packageJson.dependencies,
      ...additionalDependencies
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Updated package.json');
  }
}

// Run the setup
console.log('🚀 Setting up EKS Construction website...');
createDirectories();
createFiles();
updateAppJs();
updatePackageJson();
console.log('🎉 EKS Construction website structure created successfully!');
console.log('');
console.log('📝 Next steps:');
console.log('1. Add your background video file to public/videos/background-video.mp4');
console.log('2. Run: npm start');
console.log('3. Your EKS Construction website will be ready!');