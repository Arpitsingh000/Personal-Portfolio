import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faMobileScreen, faRocket } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ];

  const services = [
    {
      icon: faCode,
      title: 'Web Development',
      description: 'Creating responsive and performant websites using modern technologies and best practices.'
    },
    {
      icon: faPalette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces that provide excellent user experiences.'
    },
    {
      icon: faMobileScreen,
      title: 'Mobile-First Approach',
      description: 'Building websites that work flawlessly across all devices, from smartphones to desktops.'
    },
    {
      icon: faRocket,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, SEO, and conversion to help businesses succeed online.'
    },
  ];

  return (
    <section className="about-container">
      <motion.div 
        className="about-content"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>
        
        <motion.div variants={itemVariants} className="about-grid">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate web developer and designer with a strong focus on creating 
              beautiful, functional, and user-friendly websites. With several years of 
              experience in the field, I've developed a keen eye for design and a deep 
              understanding of what makes a website successful.
            </p>
            <p>
              My journey in web development began when I discovered my passion for 
              combining creativity with technical problem-solving. Since then, I've 
              been constantly learning and improving my skills to stay at the forefront 
              of web technologies and design trends.
            </p>
            <a href="#contact" className="cta-button primary">Let's Work Together</a>
          </div>
          
          <div className="skills-container">
            <h3>My Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="services-section">
          <h3>Services I Offer</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;