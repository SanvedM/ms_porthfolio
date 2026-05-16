import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../Navbar.css";
import logo from "../assets/msTrade.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar-wrap">

        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`navbar ${
            scrolled || hovered
              ? "navbar-active"
              : ""
          }`}
        >

          <div className="navbar-inner">

            {/* LEFT */}

            <div className="left-side">

              <img
                src={logo}
                alt=""
                className="logo"
              />

              <h1 className="brand">
                MS Trading
              </h1>

            </div>

            {/* CENTER */}

            <div className="nav-links">

              {[
                ["Home","home"],
                ["Services","services"],
                ["Reviews","reviews"],
                ["Contact","contact"],
              ].map(([label,id]) => (

                <button
                  key={label}
                  onClick={() =>
                    scrollToSection(id)
                  }
                  className="nav-btn"
                >
                  {label}
                </button>

              ))}

            </div>

            {/* RIGHT */}

            <div className="right-side">

              <button
  onClick={() =>
    window.location.href = "tel:+919876543210"
  }
  className="call-btn"
>
  📞 Call Now
</button>

            </div>

            {/* MOBILE */}

            <button
              className="menu-btn"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              ☰
            </button>

          </div>

        </motion.nav>

      </div>

      {menuOpen && (

        <div className="mobile-menu">

          {[
            ["Home","home"],
            ["Collections","collections"],
            ["Textures","textures"],
            ["Services","services"],
            ["Stores","stores"],
            ["Reviews","reviews"],
            ["Contact","contact"]
          ].map(([label,id]) => (

            <button
              key={label}
              className="mobile-link"
              onClick={() =>
                scrollToSection(id)
              }
            >
              {label}
            </button>

          ))}

        </div>

      )}

    </>
  );
}

export default Navbar;