import { motion } from "framer-motion";
import FadeInWrapper from "./FadeInWrapper";

function Education() {
  const educationData = [
    {
      period: "2022 - 2026",
      institution: "E.S College of Engineering and Technology",
      affiliation: "Affiliated to Anna University",
      degree: "Bachelors in Computer Science and Engineering",
      details: [
        "CGPA: 8.5*",
        "Won a Paper Presentation competition in National Level Symposium",
      ],
      location: "Villupuram, TN",
      status: "Ongoing",
    },
  ];

  return (
    <section id="education" className="py-5 bg-light">
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
              Education
            </h2>
            <p
              className="text-muted"
              style={{
                maxWidth: "400px",
                margin: "0 auto",
                fontSize: "1rem",
              }}
            >
              My academic background
            </p>
          </div>
        </FadeInWrapper>

        <div className="row justify-content-center">
          {educationData.map((edu, index) => (
            <div key={index} className="col-lg-8">
              <FadeInWrapper>
                <motion.div
                  className="education-item text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Period and Status */}
                  <div className="mb-3">
                    <span
                      className="px-3 py-1 me-2"
                      style={{
                        color: "var(--accent-gold)",
                        border: "1px solid var(--accent-gold)",
                        borderRadius: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "400",
                      }}
                    >
                      {edu.period}
                    </span>
                    <span
                      className="px-2 py-1"
                      style={{
                        backgroundColor: "var(--accent-gold)",
                        color: "var(--primary-dark)",
                        borderRadius: "10px",
                        fontSize: "0.7rem",
                        fontWeight: "500",
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>

                  {/* Institution */}
                  <h3
                    className="fw-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--primary-dark)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {edu.institution}
                  </h3>

                  {/* Affiliation */}
                  <p
                    className="text-muted mb-2"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {edu.affiliation}
                  </p>

                  {/* Degree */}
                  <h4
                    className="fw-medium mb-3"
                    style={{
                      color: "var(--accent-gold)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {edu.degree}
                  </h4>

                  {/* Details */}
                  <div className="mb-3">
                    {edu.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="d-flex align-items-center justify-content-center mb-1"
                      >
                        <div
                          className="me-2 rounded-circle"
                          style={{
                            width: "4px",
                            height: "4px",
                            backgroundColor: "var(--accent-gold)",
                          }}
                        />
                        <span
                          className="text-dark"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="d-flex align-items-center justify-content-center text-muted">
                    <span className="me-1" style={{ fontSize: "0.8rem" }}>
                      📍
                    </span>
                    <span style={{ fontSize: "0.9rem" }}>{edu.location}</span>
                  </div>
                </motion.div>
              </FadeInWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
