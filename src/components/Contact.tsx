import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';
const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-me">
      <h2>Contact Information</h2>
      <p>I'd love to connect! Feel free to follow me or reach out via any of the platforms below:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/miguel-vidigal-rodrigues-908a9216b/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/migvidro" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub size={30} />
        </a>
        <a href="https://instagram.com/migvidro" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram size={30} />
        </a>
        <a href="mailto:migvidro@gmail.com" className="social-link">
          <FaEnvelope size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
