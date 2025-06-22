import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://twitter.com/', label: 'Twitter' },
    { icon: faEnvelope, url: 'mailto:thearpitsinghchauhan@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const iconVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Portfolio</h3>
            <p>Creating beautiful digital experiences</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Noida, Uttar Pradesh, INDIA</p>
            <p>thearpitsinghchauhan.com</p>
            <p>+91 6392257540</p>
          </div>

          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Arpit Singh. All rights reserved.</p>
          <p>
            <Link to="/privacy">Privacy Policy</Link> |
            <Link to="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;