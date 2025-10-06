import { motion } from "framer-motion";
import FadeInWrapper from "./FadeInWrapper";

function Contact() {
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "kskarthikeyan.p@gmail.com",
      link: "mailto:kskarthikeyan.p@gmail.com",
      color: "#EA4335",
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+91 80725 33321",
      link: "tel:+918072533321",
      color: "#34A853",
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "Karthikeyan Kalatheeswaran",
      link: "https://linkedin.com/in/karthikeyankalatheeswaran",
      color: "#0077B5",
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "Karthikeyankalatheeswaran",
      link: "https://github.com/Karthikeyankalatheeswaran",
      color: "#333333",
    },
  ];

  return (
    <section
      id="contact"
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-dark) 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Contact Header */}
            <FadeInWrapper>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2
                  className="fw-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--accent-gold)",
                    fontSize: "2.5rem",
                  }}
                >
                  Get In Touch
                </h2>
                <p
                  className="text-light mb-5 lead"
                  style={{ maxWidth: "500px", margin: "0 auto", opacity: 0.8 }}
                >
                  Let's create something amazing together. I'm always open to
                  discussing new opportunities and ideas.
                </p>
              </motion.div>
            </FadeInWrapper>

            {/* Contact Methods Grid */}
            <div className="row justify-content-center g-4 mb-5">
              {contactMethods.map((method, index) => (
                <div key={index} className="col-md-6 col-lg-5">
                  <FadeInWrapper>
                    <motion.a
                      href={method.link}
                      target={
                        method.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        method.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="text-decoration-none d-block"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className="p-4 text-center contact-card"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(201, 169, 110, 0.2)",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                          height: "100%",
                        }}
                      >
                        <div className="mb-3">
                          <i
                            className={`${method.icon} display-6`}
                            style={{ color: method.color }}
                          ></i>
                        </div>
                        <h6
                          className="fw-bold mb-2"
                          style={{
                            color: "var(--accent-gold)",
                            fontSize: "1rem",
                          }}
                        >
                          {method.label}
                        </h6>
                        <p
                          className="text-light mb-0 small"
                          style={{ opacity: 0.9, lineHeight: "1.4" }}
                        >
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  </FadeInWrapper>
                </div>
              ))}
            </div>

            {/* Integrated Footer */}
            <FadeInWrapper>
              <motion.div
                className="pt-5 mt-5 border-top"
                style={{ borderColor: "rgba(201, 169, 110, 0.2) !important" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="row align-items-center">
                  <div className="col-md-6 text-md-start text-center mb-3 mb-md-0">
                    <p
                      className="text-light mb-0 small"
                      style={{ opacity: 0.7 }}
                    >
                      © {new Date().getFullYear()} Coded by Karthikeyan. Crafted with
                      passion.
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end text-center">
                    <div className="d-flex justify-content-center justify-content-md-end gap-4">
                      {[
                        {
                          icon: "fab fa-github",
                          url: "https://github.com/Karthikeyankalatheeswaran",
                        },
                        {
                          icon: "fab fa-linkedin",
                          url: "https://linkedin.com/in/karthikeyankalatheeswaran",
                        },
                        {
                          icon: "fas fa-envelope",
                          url: "mailto:kskarthikeyan.p@gmail.com",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light text-decoration-none"
                          whileHover={{
                            scale: 1.2,
                            color: "var(--accent-gold)",
                          }}
                          style={{ opacity: 0.7 }}
                        >
                          <i
                            className={social.icon}
                            style={{ fontSize: "1.2rem" }}
                          ></i>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInWrapper>

            {/* Back to Top */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="btn btn-link text-decoration-none p-0"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  color: "var(--accent-gold)",
                  opacity: 0.7,
                }}
              >
                <i className="fas fa-chevron-up me-2"></i>
                <span className="small">Back to Top</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
