import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section for top navbar too
      const sections = ["hero", "about", "projects", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all ${
        scrolled ? "bg-dark" : "bg-transparent"
      }`}
      style={{
        transition: "all 0.3s ease",
        padding: scrolled ? "0.5rem 0" : "1.5rem 0",
        zIndex: 1040,
      }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--accent-gold)",
            fontSize: "1.5rem",
          }}
        >
          Karthikeyan
        </a>
        <div>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item mx-2">
                <a
                  className={`nav-link position-relative ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  style={{
                    color:
                      activeSection === item.id
                        ? "var(--accent-gold)"
                        : "var(--text-light)",
                    fontWeight: "300",
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.label}
                  <span
                    className="position-absolute bottom-0 left-0 w-0 h-px transition-all"
                    style={{
                      backgroundColor: "var(--accent-gold)",
                      width: activeSection === item.id ? "100%" : "0%",
                    }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
