import { motion } from "framer-motion";
import FadeInWrapper from "./FadeInWrapper";
import image from "../assets/profile.jpg";
import image2 from "../assets/profile2.jpg";

// Helper function to get provider icons
const getProviderIcon = (issuer) => {
  const providerIcons = {
    "Amazon Web Services": "fab fa-aws",
    AWS: "fab fa-aws",
    "Google Cloud": "fab fa-google",
    Google: "fab fa-google",
    IBM: "fas fa-brain",
    Microsoft: "fab fa-microsoft",
    Meta: "fab fa-meta",
    Coursera: "fas fa-graduation-cap",
    Udemy: "fas fa-play-circle",
    LinkedIn: "fab fa-linkedin",
    freeCodeCamp: "fas fa-code",
    HackerRank: "fas fa-laptop-code",
    Cisco: "fas fa-network-wired",
    Oracle: "fas fa-database",
  };

  return providerIcons[issuer] || "fas fa-award"; // Default icon
};

function About() {
  const skills = [
    "Django",
    "React",
    "Langchain",
    "OpenAI",
    "JavaScript",
    "Python",
    "Numpy",
    "Pandas",
    "PostgreSQL",
    "HTML5",
    "CSS3 - Bootstrap 5",
    "Git & GitHub",
    "Figma",
    "API Integration",
    "Amazon Web Services (AWS)",
    "AI Tools"
  ];

  const interests = [
    "Artificial Intelligence",
    "AI Tools",
    "Machine Learning",
    "Large Language Models",
    "Deep Learning",
    "Web Development",
    "Data Structures & Algorithms",
  ];

  const certifications = [
    {
      name: "Generative AI with Large Language Models",
      issuer: "Coursera",
      description:
        "Understanding and building applications using LLMs and generative AI",
      year: "2025",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      description:
        "Foundational knowledge of AWS Cloud concepts, services, and pricing",
      year: "2025",
    },
    {
      name: "The Complete SQL Bootcamp",
      issuer: "Udemy",
      description:
        "SQL for Data Analysis and Database Management using PostgreSQL",
      year: "2025",
    },
    {
      name: "Python - A Complete Developer",
      issuer: "Udemy",
      description:
        "Python Basics to Intermediate concepts including OOP, File Handling, and Web Scraping",
      year: "2024",
    },
    // Add more certifications as needed
  ];

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        {/* Main About Content - Simplified */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <FadeInWrapper>
              <div className="mb-5">
                <h2
                  className="fw-bold mb-5 text-center"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--primary-dark)",
                    fontSize: "2.5rem",
                  }}
                >
                  About Me
                </h2>
                <div className="row align-items-center justify-content-between">
                  {/* Text on the left - larger column */}
                  <div className="col-lg-7">
                    <div className="pe-4">
                      <p
                        className="text-muted mb-4"
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: "1.8",
                        }}
                      >
                        Hello! I'm Karthikeyan, a computer science student who
                        loves turning ideas into impactful digital solutions. My
                        interests span AI/ML, web development and creating
                        user-friendly applications that make technology simple
                        and useful.
                      </p>
                      <p
                        className="text-muted mb-4"
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: "1.8",
                        }}
                      >
                        I believe in the power of technology to solve complex
                        problems and create positive impact. Whether working on
                        AI Models or web development, I strive for
                        excellence in every project.
                      </p>
                    </div>
                  </div>

                  {/* Profile picture on the right - optimized */}
                  <div className="col-lg-5">
                    <div className="d-flex justify-content-center">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          padding: "15px",
                          backgroundColor: "rgba(201, 169, 110, 0.1)",
                          borderRadius: "16px",
                          border: "2px solid rgba(201, 169, 110, 0.2)",
                          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          src={image2}
                          alt="Profile"
                          style={{
                            width: "320px",
                            height: "auto",
                            borderRadius: "12px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWrapper>

            {/* Skills Section - Minimal */}
            <FadeInWrapper>
              <div className="mb-5">
                <h3
                  className="fw-bold mb-4 text-center"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--primary-dark)",
                    fontSize: "1.8rem",
                  }}
                >
                  Skills & Technologies
                </h3>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-2"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        color: "var(--accent-gold)",
                        border: "1px solid var(--accent-gold)",
                        borderRadius: "20px",
                        fontSize: "0.9rem",
                        fontWeight: "400",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeInWrapper>

            {/* Interests Section */}
            <FadeInWrapper>
              <div className="mb-5">
                <h3
                  className="fw-bold mb-4 text-center"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--primary-dark)",
                    fontSize: "1.8rem",
                  }}
                >
                  Areas of Interest
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      {interests.map((interest, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-2"
                          whileHover={{ scale: 1.05 }}
                          style={{
                            color: "var(--primary-dark)",
                            backgroundColor: "rgba(201, 169, 110, 0.1)",
                            borderRadius: "20px",
                            fontSize: "0.9rem",
                            fontWeight: "400",
                          }}
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWrapper>

            {/* Certifications Section - With Description */}
            <FadeInWrapper>
              <div className="mb-5">
                <h3
                  className="fw-bold mb-4 text-center"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--primary-dark)",
                    fontSize: "1.8rem",
                  }}
                >
                  Certifications
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="d-flex flex-column gap-3">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          className="d-flex align-items-start p-3"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            backgroundColor: "rgba(201, 169, 110, 0.05)",
                            border: "1px solid rgba(201, 169, 110, 0.1)",
                            borderRadius: "8px",
                          }}
                        >
                          {/* Provider Icon */}
                          <div className="me-3 mt-1">
                            <i
                              className={`${getProviderIcon(
                                cert.issuer
                              )} display-6`}
                              style={{ color: "var(--accent-gold)" }}
                            ></i>
                          </div>

                          {/* Certification Details */}
                          <div className="flex-grow-1">
                            <h6
                              className="fw-bold mb-1"
                              style={{
                                color: "var(--primary-dark)",
                                fontSize: "1rem",
                              }}
                            >
                              {cert.name}
                            </h6>
                            <p
                              className="text-muted mb-1 small"
                              style={{ lineHeight: "1.4" }}
                            >
                              {cert.issuer}
                            </p>
                            <p
                              className="text-muted mb-0 small"
                              style={{ lineHeight: "1.4", fontSize: "0.8rem" }}
                            >
                              {cert.description}
                            </p>
                          </div>

                          {/* Year */}
                          <div className="text-end ms-3">
                            <span
                              className="px-2 py-1"
                              style={{
                                color: "var(--accent-gold)",
                                border: "1px solid var(--accent-gold)",
                                borderRadius: "4px",
                                fontSize: "0.75rem",
                                fontWeight: "400",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {cert.year}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
