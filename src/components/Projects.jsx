import { motion } from "framer-motion";
import FadeInWrapper from "./FadeInWrapper";

function Projects() {
  const projectList = [
    {
      title: "PC Components E-Commerce Platform",
      desc: "Full-stack e-commerce solution with dummy modern payment integration and admin dashboard. An e-commerce web app built with Django for browsing, customizing, and purchasing PC components.",
      github: "https://github.com/Karthikeyankalatheeswaran/pcshop-django",
      live: "https://componentpc-k.onrender.com/",
      tags: [
        "Django",
        "Python",
        "SQLite",
        "Render",
        "JavaScript",
        "HTML & CSS",
      ],
    },
    {
      title: "Checkpoint - A Game Logging App",
      desc: "A web application that allows users to log and track their gaming sessions, built with Django and React.",
      github: "https://github.com/Karthikeyankalatheeswaran/project-checkpoint",
      // live: "https://componentpc-k.onrender.com/",
      tags: [
        "Django",
        "Python",
        "React",
        "PostgreSQL",
        "JavaScript",
        "HTML & CSS",
        "APIs",
      ],
    },
  ];

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <FadeInWrapper>
          <div className="text-center mb-4">
            <h2
              className="fw-bold mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--primary-dark)",
                fontSize: "2.5rem",
              }}
            >
              Projects
            </h2>
            <p
              className="text-muted"
              style={{
                maxWidth: "400px",
                margin: "0 auto",
                fontSize: "1rem",
              }}
            >
              My recent work and personal projects
            </p>
          </div>
        </FadeInWrapper>

        <div className="row justify-content-center">
          {projectList.map((project, index) => (
            <div key={index} className="col-lg-8">
              <FadeInWrapper>
                <motion.div
                  className="project-item text-center mb-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--primary-dark)",
                      fontSize: "1.8rem",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-muted mb-4"
                    style={{
                      lineHeight: "1.6",
                      fontSize: "1rem",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1"
                          style={{
                            color: "var(--accent-gold)",
                            border: "1px solid var(--accent-gold)",
                            borderRadius: "15px",
                            fontSize: "0.8rem",
                            fontWeight: "400",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-3 justify-content-center">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: "var(--accent-gold)",
                        color: "var(--primary-dark)",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: "0.9rem",
                      }}
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: "transparent",
                        color: "var(--accent-gold)",
                        border: "1px solid var(--accent-gold)",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: "0.9rem",
                      }}
                    >
                      <i className="fab fa-github me-2"></i>
                      Source Code
                    </motion.a>
                  </div>
                </motion.div>
              </FadeInWrapper>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <FadeInWrapper>
          <div className="text-center mt-4">
            <motion.a
              href="https://github.com/Karthikeyankalatheeswaran"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "transparent",
                color: "var(--accent-gold)",
                border: "1px solid var(--accent-gold)",
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: "0.9rem",
              }}
            >
              <i className="fab fa-github me-2"></i>
              View All Projects
            </motion.a>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}

export default Projects;
