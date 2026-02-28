import { useState } from "react";
import FadeInWrapper from "./FadeInWrapper";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "I provide comprehensive web development services including front-end development with React, back-end development with Node.js, full-stack solutions, UI/UX design, and responsive web design. I focus on creating scalable, maintainable, and user-friendly applications.",
    },
    {
      q: "How can we collaborate?",
      a: "We start with an initial discovery call to understand your project requirements and goals. Then I provide a detailed proposal, followed by structured development phases with regular updates and feedback sessions to ensure we're aligned throughout the process.",
    },
    {
      q: "Do you work internationally?",
      a: "Yes, I collaborate with clients worldwide. I'm experienced in remote collaboration and use modern tools like Slack, Zoom, and project management software to ensure seamless communication across different time zones.",
    },
    {
      q: "What's your development process?",
      a: "I follow an agile methodology with emphasis on clear communication, regular deliverables, and iterative improvements. My process includes planning, design, development, testing, and deployment phases with client involvement at every stage.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 bg-light">
      <div className="container">
        <FadeInWrapper>
          <h2
            className="fw-bold mb-5 text-center display-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--primary-dark)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </FadeInWrapper>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="faq-item mb-4 border-bottom"
                initial={false}
              >
                <button
                  className="faq-question w-100 text-start p-4 border-0 bg-transparent d-flex justify-content-between align-items-center"
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                  }}
                >
                  {faq.q}
                  <motion.span
                    animate={{ rotate: activeIndex === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: "1.5rem" }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer"
                    >
                      <div
                        className="p-4 pt-0 text-muted"
                        style={{ lineHeight: "1.7" }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQ;
