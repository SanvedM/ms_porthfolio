import { motion } from "framer-motion";
import "../Hero.css"
import logo from "../assets/slider11.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <img
        src={logo}
        alt=""
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content-wrap">

        <div className="hero-container">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5
            }}
            className="hero-content"
          >

            <p className="hero-top-text">
              Paints • Interior Design • Since 2009
            </p>

            <h1 className="hero-title">
              Your Trusted Partner in Color & Design.
            </h1>

            <p className="hero-subtitle">
              Supplying the finest paints and professional
              application services since 2009.
            </p>

            <div className="hero-buttons">

              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
              >
                Our Services
              </button>

              <button
                className="btn-secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
              >
                Contact Us
              </button>

            </div>

            <div className="stats">

              {[
                ["5000+", "Homes Painted"],
                ["300+", "Texture Designs"],
                ["4.9★", "Customer Rating"]
              ].map(([number, text]) => (

                <div
                  key={text}
                  className="stat-box"
                >
                  <h2>{number}</h2>
                  <p>{text}</p>
                </div>

              ))}

            </div>

            <div className="indicators">
              <div className="active"></div>
              <div></div>
              <div></div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;