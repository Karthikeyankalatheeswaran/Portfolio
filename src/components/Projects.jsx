import { motion } from "framer-motion";
import FadeInWrapper from "./FadeInWrapper";

function Projects() {
  const projectList = [
    {
      title: "PC Components E-Commerce Platform",
      desc: "A full-stack e-commerce platform for PC components built with Django. Features user authentication, product management, shopping cart logic, AJAX interactions, admin dashboard, and dummy payment integration.",
      github: "https://github.com/Karthikeyankalatheeswaran/pcshop-django",
      tags: ["Django", "Python", "SQLite", "JavaScript", "HTML & CSS"],
    },
    {
      title: "Checkpoint — A Game Logging App",
      desc: "A web application that allows users to log and track their gaming sessions. Built with a Django REST backend and a React frontend connected via APIs.",
      github: "https://github.com/Karthikeyankalatheeswaran/project-checkpoint",
      tags: ["Django", "React", "PostgreSQL", "Python", "APIs"],
    },
    {
      title: "MARS — Multi-Agent Retrieval Synthesis",
      desc: "A multi-agent AI system for retrieval-augmented generation and synthesis. Leverages LLM orchestration to intelligently retrieve, reason, and synthesize information from multiple sources.",
      github: "https://github.com/Karthikeyankalatheeswaran/MARS---Multi-Agent-Retrieval-Synthesis",
      tags: ["Python", "LangChain", "OpenAI", "RAG", "Multi-Agent"],
    },
    {
      title: "AI Resume Validator & Job Recommender",
      desc: "An AI-powered tool that validates resumes and recommends relevant job opportunities. Uses NLP techniques to match resume skills with job descriptions.",
      github: "https://github.com/Karthikeyankalatheeswaran/AI-Resume-Validator-Job-Recommender",
      tags: ["Python", "AI/ML", "NLP", "OpenAI"],
    },
    // {
    //   title: "ML Demo Projects",
    //   desc: "A collection of machine learning demo projects implemented in Jupyter Notebooks. Covers supervised learning, data preprocessing, visualization, and model evaluation techniques.",
    //   github: "https://github.com/Karthikeyankalatheeswaran/ML-Demo-Projects",
    //   tags: ["Python", "Jupyter", "Scikit-learn", "Pandas", "NumPy"],
    // },
    // {
    //   title: "VETTI",
    //   desc: "A Python-based project exploring automation and scripting concepts. Built as a utility tool with a focus on clean code and reusable components.",
    //   github: "https://github.com/Karthikeyankalatheeswaran/VETTI",
    //   tags: ["Python", "Automation", "Scripting"],
    // },
    // {
    //   title: "DSA Implementations",
    //   desc: "A comprehensive reference library of Data Structures and Algorithms implemented in Python. Covers arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming.",
    //   github: "https://github.com/Karthikeyankalatheeswaran/DSA-Implementations",
    //   tags: ["Python", "Data Structures", "Algorithms"],
    // },
    {
      title: "LeetCode Solves",
      desc: "A curated collection of LeetCode problems solved with clean, well-commented Python solutions. Covers a wide range of difficulty levels and topics including arrays, strings, trees, and graphs.",
      github: "https://github.com/Karthikeyankalatheeswaran/LeetCode-Solves",
      tags: ["Python", "DSA", "Problem Solving", "LeetCode"],
    },
  ];

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <FadeInWrapper>
          <div className="text-center mb-5">
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
                maxWidth: "450px",
                margin: "0 auto",
                fontSize: "1rem",
              }}
            >
              All my work — open source and available on GitHub
            </p>
          </div>
        </FadeInWrapper>

        <div className="row g-4">
          {projectList.map((project, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-12">
              <FadeInWrapper>
                <motion.div
                  className="h-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: "rgba(201, 169, 110, 0.04)",
                    border: "1px solid rgba(201, 169, 110, 0.18)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Top: title + desc */}
                  <div>
                    <h3
                      className="fw-bold mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--primary-dark)",
                        fontSize: "1.25rem",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-muted mb-3"
                      style={{
                        lineHeight: "1.65",
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1"
                          style={{
                            color: "var(--accent-gold)",
                            border: "1px solid var(--accent-gold)",
                            borderRadius: "12px",
                            fontSize: "0.75rem",
                            fontWeight: "400",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Source Code button */}
                  <div>
                    <motion.a
                      href={project.github}
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
          <div className="text-center mt-5">
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
              View GitHub Profile
            </motion.a>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}

export default Projects;
