import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullName = "Karthikeyan";
  const titles = [
    "Full-Stack Developer",
    "Python Developer",
    "Tech Enthusiast",
    "Gamer",
    "Problem Solver",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [particles, setParticles] = useState([]);
  const [hobbyIcons, setHobbyIcons] = useState([]);

  // Name typing effect
  useEffect(() => {
    if (displayedText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [displayedText]);

  // Title rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Dynamic background particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Floating hobby icons
  useEffect(() => {
    const generateHobbyIcons = () => {
      const hobbies = [
        {
          id: 1,
          icon: "fas fa-desktop", // Monitor/PC
          name: "Coding",
          size: "2rem",
          x: 15,
          y: 20,
          rotation: -5,
          duration: 25,
          delay: 0,
        },
        {
          id: 2,
          icon: "fas fa-gamepad", // PS5 Controller
          name: "Gaming",
          size: "1.8rem",
          x: 85,
          y: 25,
          rotation: 8,
          duration: 30,
          delay: 2,
        },
        {
          id: 3,
          icon: "fas fa-car", // F1 Car
          name: "Racing",
          size: "2.2rem",
          x: 20,
          y: 75,
          rotation: -8,
          duration: 28,
          delay: 4,
        },
        {
          id: 4,
          icon: "fas fa-dumbbell", // Gym
          name: "Fitness",
          size: "1.9rem",
          x: 80,
          y: 70,
          rotation: 5,
          duration: 32,
          delay: 6,
        },
        {
          id: 5,
          icon: "fas fa-keyboard", // Keyboard
          name: "Development",
          size: "1.7rem",
          x: 40,
          y: 15,
          rotation: -3,
          duration: 26,
          delay: 1,
        },
        {
          id: 6,
          icon: "fas fa-microchip", // Tech
          name: "Technology",
          size: "1.6rem",
          x: 60,
          y: 85,
          rotation: 7,
          duration: 29,
          delay: 3,
        },
        {
          id: 7,
          icon: "fas fa-code", // Programming
          name: "Programming",
          size: "1.8rem",
          x: 75,
          y: 40,
          rotation: -6,
          duration: 27,
          delay: 5,
        },
        {
          id: 8,
          icon: "fas fa-brain", // Problem Solving
          name: "Problem Solving",
          size: "1.9rem",
          x: 25,
          y: 55,
          rotation: 4,
          duration: 31,
          delay: 7,
        },
      ];
      setHobbyIcons(hobbies);
    };

    generateHobbyIcons();
  }, []);

  // Handle resume download
  const handleResumeDownload = () => {
    const resumeUrl = "/final resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Karthikeyan-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="d-flex align-items-center vh-100 bg-dark text-white position-relative overflow-hidden"
    >
      {/* Location - Top Left */}
      <motion.div
        className="position-absolute top-0 end-0 m-4"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="d-flex align-items-center">
          <i
            className="fas fa-map-marker-alt me-2"
            style={{ color: "var(--accent-gold)" }}
          ></i>
          <span style={{ fontSize: "0.9rem", fontWeight: "300" }}>
            Villupuram, Tamil Nadu
          </span>
        </div>
      </motion.div>

      {/* Languages - Top Right */}
      {/* <motion.div
        className="position-absolute top-0 end-0 m-4"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="d-flex align-items-center">
          <i
            className="fas fa-language me-2"
            style={{ color: "var(--accent-gold)" }}
          ></i>
          <span style={{ fontSize: "0.9rem", fontWeight: "300" }}>
            Tamil, English, Hindi
          </span>
        </div>
      </motion.div> */}

      {/* Animated Background Particles */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="position-absolute"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: "var(--accent-gold)",
              borderRadius: "50%",
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Grid Background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: `
            linear-gradient(90deg, rgba(201, 169, 110, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(201, 169, 110, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          zIndex: 0,
        }}
      >
        <motion.div
          className="w-100 h-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.7) 100%)",
          }}
          animate={{
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Hobby Icons */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        {hobbyIcons.map((hobby) => (
          <motion.div
            key={hobby.id}
            className="position-absolute"
            style={{
              left: `${hobby.x}%`,
              top: `${hobby.y}%`,
              fontSize: hobby.size,
              color: "var(--accent-gold)",
              opacity: 0.4,
              filter: "drop-shadow(0 0 8px rgba(201, 169, 110, 0.3))",
            }}
            animate={{
              y: [0, -20, 0, 15, 0],
              x: [0, 5, 0, -5, 0],
              rotate: [0, hobby.rotation, 0, -hobby.rotation, 0],
              scale: [1, 1.1, 1, 1.05, 1],
            }}
            transition={{
              duration: hobby.duration,
              delay: hobby.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              opacity: 0.8,
              scale: 1.3,
              filter: "drop-shadow(0 0 15px rgba(201, 169, 110, 0.6))",
              transition: { duration: 0.3 },
            }}
          >
            <i className={hobby.icon}></i>
          </motion.div>
        ))}
      </div>

      {/* Floating Code Elements - Reduced opacity to not conflict with hobby icons */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        {[
          { text: "<Code/>", x: 10, y: 30 },
          { text: "{Developer}", x: 85, y: 35 },
          { text: "const creative = true;", x: 15, y: 65 },
          { text: "function innovate() {}", x: 75, y: 60 },
        ].map((element, index) => (
          <motion.div
            key={index}
            className="position-absolute text-muted"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: "0.7rem",
              fontFamily: "monospace",
              opacity: 0.2,
            }}
            animate={{
              y: [0, -8, 0],
              rotateZ: [0, 3, 0],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          />
        ))}
      </div>

      <div
        className="container text-center position-relative"
        style={{ zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Name with typing effect */}
          <div className="position-relative">
            <h1
              className="fw-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--accent-gold)",
                textShadow: "0 0 30px rgba(201, 169, 110, 0.3)",
                fontSize: "clamp(3rem, 10vw, 6rem)",
              }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ color: "var(--accent-gold)" }}
              >
                |
              </motion.span>
            </h1>

            {/* Subtle glow effect behind name */}
            <motion.div
              className="position-absolute top-50 start-50 translate-middle"
              style={{
                width: "min(80vw, 500px)",
                height: "min(80vw, 500px)",
                background:
                  "radial-gradient(circle, rgba(201, 169, 110, 0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: -1,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Rotating title */}
          <motion.div
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lead mb-4"
            style={{
              fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
              color: "var(--text-light)",
              minHeight: "2rem",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
            }}
          >
            {titles[currentTitleIndex]}
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="d-flex gap-3 justify-content-center flex-wrap"
          >
            <motion.button
              onClick={handleResumeDownload}
              className="btn px-4 py-2 position-relative"
              style={{
                backgroundColor: "var(--accent-gold)",
                color: "var(--primary-dark)",
                border: "none",
                borderRadius: "8px",
                fontWeight: "500",
                overflow: "hidden",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(201, 169, 110, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download me-2"></i>
              Resume
              {/* Button shine effect */}
              <motion.div
                className="position-absolute top-0 left-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transform: "translateX(-100%)",
                }}
                whileHover={{
                  transform: "translateX(100%)",
                  transition: { duration: 0.6 },
                }}
              />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-5"
          >
            <div className="d-flex justify-content-center gap-4">
              {[
                {
                  name: "GitHub",
                  icon: "fab fa-github",
                  url: "https://github.com/Karthikeyankalatheeswaran",
                },
                {
                  name: "LinkedIn",
                  icon: "fab fa-linkedin",
                  url: "https://linkedin.com/in/karthikeyankalatheeswaran",
                },
                // {
                //   name: "Twitter",
                //   icon: "fab fa-twitter",
                //   url: "https://twitter.com/yourusername",
                // },
                {
                  name: "Email",
                  icon: "fas fa-envelope",
                  url: "mailto:kskarthikeyan.p@gmail.com",
                },
                {
                  name: "LeetCode",
                  icon: "fas fa-code",
                  url: "https://leetcode.com/u/kskarthikeyan_p/",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none position-relative"
                  style={{ fontSize: "1.5rem" }}
                  whileHover={{
                    scale: 1.3,
                    color: "var(--accent-gold)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  <i className={social.icon}></i>
                  {/* Social icon glow effect */}
                  <motion.div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{
                      width: "0px",
                      height: "0px",
                      background:
                        "radial-gradient(circle, rgba(201, 169, 110, 0.3) 0%, transparent 70%)",
                      borderRadius: "50%",
                    }}
                    whileHover={{
                      width: "50px",
                      height: "50px",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            color: "var(--accent-gold)",
            fontSize: "1.5rem",
            cursor: "pointer",
            textShadow: "0 0 10px rgba(201, 169, 110, 0.5)",
          }}
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
