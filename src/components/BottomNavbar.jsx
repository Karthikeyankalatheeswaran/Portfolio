import { useState, useEffect } from "react";

function BottomNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" }, // Replaced FAQ with Education
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll to detect active section and hide navbar at bottom
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      // Hide navbar when near bottom of page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate how far from bottom
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      // Hide navbar when within 100px of bottom
      if (distanceFromBottom < 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="bottom-navbar-wrapper position-fixed"
      style={{
        bottom: "20px",
        left: "50%",
        transform: `translateX(-50%) ${
          isVisible ? "translateY(0)" : "translateY(100px)"
        }`,
        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="bottom-navbar bg-dark rounded-pill shadow-lg border-0"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          border: "1px solid rgba(201, 169, 110, 0.3)",
          padding: "8px 16px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-item btn btn-link text-decoration-none p-2 position-relative ${
                activeSection === item.id ? "active" : ""
              }`}
              style={{
                background: "transparent",
                border: "none",
                color:
                  activeSection === item.id
                    ? "var(--accent-gold)"
                    : "var(--text-light)",
                transition: "all 0.3s ease",
                minWidth: "auto",
                fontSize: "0.85rem",
                fontWeight: "400",
                letterSpacing: "0.5px",
                opacity: activeSection === item.id ? 1 : 0.7,
              }}
            >
              {item.label}

              {/* Active indicator dot */}
              {activeSection === item.id && (
                <div
                  className="position-absolute top-100 start-50 translate-middle-x mt-1"
                  style={{
                    width: "4px",
                    height: "4px",
                    backgroundColor: "var(--accent-gold)",
                    borderRadius: "50%",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
