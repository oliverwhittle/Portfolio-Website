import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact</h2>
    <div className="contact-links">
      <a href="mailto:your@email.com" className="contact-card">
        <img
          src="https://img.icons8.com/?size=100&id=16249&format=png&color=000000"
          alt="Email icon"
          className="contact-icon"
        />
        <span>Email Me</span>
      </a>

      <a
        href="https://github.com/yourusername"
        className="contact-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/?size=100&id=16318&format=png&color=000000"
          alt="GitHub icon"
          className="contact-icon"
        />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/yourusername/"
        className="contact-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
          alt="LinkedIn icon"
          className="contact-icon"
        />
        <span>LinkedIn</span>
      </a>
    </div>
    <div class="custom-shape-divider-bottom-1753488463">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
);

export default Contact;
