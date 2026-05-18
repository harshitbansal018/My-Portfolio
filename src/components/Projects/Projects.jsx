import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { profile, projects } from '../../data/portfolioData';

function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading row-heading">
        <div>
          <span className="eyebrow">Projects</span>
          <h2>Resume projects designed around business value and technical clarity.</h2>
        </div>
        <div className="filter-tabs" role="tablist" aria-label="Project filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={filter === category ? 'active' : ''}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              whileHover={{ y: -8 }}
            >
              <div className={`project-image ${project.imageClass}`}>
                <span>{project.category}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-actions">
                  <a href={profile.gitHub} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                    <FiGithub />
                  </a>
                  <a href="#contact" aria-label={`Discuss ${project.title}`}>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;
