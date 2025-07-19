import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Multi Page Authentication ',
      category: 'web',
      image: '/multi-page.png',
      description: 'A fully responsive multi-page authentication application with user registration, login.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/Arpitsingh000/multi-page-auth-app.git',
      liveDemo: 'https://multi-page-auth-app.vercel.app/',
    },
    {
      id: 2,
      title: 'Tic tac Toe Game',
      category: 'app',
      image: '/tic-tac-toe.png',
      description: 'A fun and interactive Tic Tac Toe game built with HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Arpitsingh000/tic-tac-toe.git',
      liveDemo: 'https://tic-tac-game-by-arpit.netlify.app/',
    },
    {
      id: 3,
      title: 'Movie Review website',
      category: 'web',
      image: '/movie-cards.png',
      description: 'A beautiful website for displaying movie reviews, featuring a card layout with detailed information.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Arpitsingh000/Movie-Cards-UsingReact.git',
      liveDemo: 'https://movie-cards-using-react-xgbx.vercel.app/',
    },
    {
      id: 4,
      title: 'Memory Game',
      category: 'app',
      image: '/memory-game.png',
      description: 'A weather application that provides real-time forecasts, historical data, and interactive maps.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/Arpitsingh000/memory-game.git',
      liveDemo: 'https://memory-game-lemon-nine.vercel.app/',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'design',
      image: '/portfolio.png',
      description: 'A creative portfolio website showcasing my skills, projects, and experiences in web development and design.',
      technologies: ['Figma', 'Adobe Photoshop', 'HTML/CSS', 'JavaScript', 'React'],
      github: '#',
      liveDemo: '#',
    },
    {
      id: 6,
      title: 'Contact Manager',
      category: 'app',
      image: '/contact-app.png',
      description: 'A contact management application that allows users to store and manage their contacts efficiently.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/Arpitsingh000/Contact-Card-App.git',
      liveDemo: 'https://contact-card-app.vercel.app/',
    },
    {
      id: 7,
      title: 'Stone Paper Scissor Game',
      category: 'app',
      image: '/Stone-Paper-Scissor.png',
      description: 'A fun and interactive Stone Paper Scissor game built with React Native. Players can compete against the computer or with friends.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Arpitsingh000/STONE-PAPER-SCISSOR.git',
      liveDemo: 'https://stone-paper-scissor-game-by-arpit.netlify.app/',
    },
    {
      id: 8,
      title: 'Spotify Clone',
      category: 'web',
      image: '/Spotify.png',
      description: 'The Clone of Spotify - A music streaming platform that allows users to listen to their favorite songs and discover new music.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Arpitsingh000/spotify-clone.git',
      liveDemo: 'https://the-spotify-clone-by-arpit.netlify.app/',
    },
    {
      id: 9,
      title: 'Netflix Clone',
      category: 'web',
      image: '/netflix.png',
      description: 'The Clone of Netflix - A movie streaming platform that allows users to watch their favorite shows and discover new content.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Arpitsingh000/NETFLIX-CLONE.git',
      liveDemo: 'https://movie-clone-by-arpit.netlify.app/',
    },
    {
      id: 10,
      title: 'Money Manager',
      category: 'app',
      image: '/money.png',
      description: 'Take control of your finances with our smart Money Manager app – track, budget, and save effortlessly.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      github: 'https://github.com/Arpitsingh000/Money-Manager.git',
      liveDemo: 'https://money-manager-system.vercel.app/',
    },
    {
      id: 11,
      title: 'TMDB Movie Discovery',
      category: 'web',
      image: '/movie-discovery.png',
      description: 'Movie Discovery is a modern web application that allows users to explore trending and top-rated movies using the TMDB (The Movie Database) API.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router', 'React.lazy + Suspense', 'React.memo', 'Axios/Fetch'],
      github: 'https://github.com/Arpitsingh000/movie-discovery-app.git',
      liveDemo: 'https://tmdb-movie-discovery-app.vercel.app/',
    },
    {
      id: 12,
      title: 'Photo Gallery',
      category: 'app',
      image: '/photo-gallery.png',
      description: 'This is a photo gallery web app that displays a collection of images in a clean, organized layout.Users can browse, view details, and enjoy a visually appealing image viewing experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', ],
      github: 'https://github.com/Arpitsingh000/Photo-Gallery.git',
      liveDemo: 'https://photo-gallery-for-you.vercel.app/',
    },
    {
      id: 13,
      title: 'Online Code Editor',
      category: 'web',
      image: '/code-editor.png',
      description: 'This is a simple online HTML code editor where you can write, edit, and preview HTML in real time.It helps users test and experiment with HTML code directly in the browser without any setup.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', ],
      github: 'https://github.com/Arpitsingh000/online-code-editor.git',
      liveDemo: 'https://online-html-code-editor.vercel.app/',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'Applications' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-container">
      <motion.div
        className="projects-content"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My Projects
        </motion.h2>

        <motion.p variants={itemVariants} className="section-subtitle">
          Here are some of my recent works. Click on a project to learn more about it.
        </motion.p>

        <motion.div variants={itemVariants} className="filter-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }}
                transition={{ duration: 0.3 }}
                onClick={() => openProjectDetails(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span>View Details</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-category">{categories.find(cat => cat.id === project.category).name}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-modal" onClick={closeProjectDetails}>&times;</button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-content">
                <h3>{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.description}</p>

                <div className="technologies-list">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <a href={selectedProject.github} className="modal-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> View Code
                  </a>
                  <a href={selectedProject.liveDemo} className="modal-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faChrome} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
