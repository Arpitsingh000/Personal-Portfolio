import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  // Check if user has a theme preference in localStorage or prefers dark mode
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to document when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  return (
    <div className="theme-toggle-container">
      <motion.button 
        className={`theme-toggle ${theme}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div className="toggle-track">
          <div className="toggle-icon light">
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className="toggle-icon dark">
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <motion.div 
            className="toggle-thumb"
            layout
            transition={spring}
          />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;