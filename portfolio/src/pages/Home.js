import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        staggerChildren: 0.2,
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section className="home-container">
      <motion.div 
        className="hero-section"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={heroVariants}
      >
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1 variants={itemVariants} className="hero-title">
              Hello, I'm <span className="highlight">Arpit Singh</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="hero-subtitle">
              Web Developer & Designer
            </motion.h2>
            
            <motion.p variants={itemVariants} className="hero-description">
              I create beautiful, functional, and responsive websites that help businesses grow and succeed online.
            </motion.p>
            
            <motion.div variants={itemVariants} className="cta-container">
              <a href="projects" className="cta-button primary">View My Work</a>
              <a href="contact" className="cta-button secondary">Contact Me</a>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants} 
            className="profile-image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/Profile.png" alt="Arpit Singh" className="profile-image" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
        }}
      >
        <p>Scroll Down</p>
        <FontAwesomeIcon icon={faArrowDown} />
      </motion.div>
    </section>
  );
};

export default Home;