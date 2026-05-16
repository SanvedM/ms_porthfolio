import { motion } from "framer-motion";
import "../ServiceSection.css";

function ServiceSection({
  title,
  desc,
  image,
  reverse
}) {
  return (
    <section
      className="service-section"
      id="services"
    >
      <div className="service-container">

        <div className="service-grid">

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity:0,
              x: reverse ? 60 : -60
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:1
            }}
            viewport={{
              once:true
            }}
            className={`image-wrap ${
              reverse ? "reverse-image" : ""
            }`}
          >

            <div className="image-box">

              <div className="image-overlay"/>

              <img
                src={image}
                alt={title}
                loading="lazy"
                draggable="false"
                className="service-image"
              />

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity:0,
              x: reverse ? -60 : 60
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:1
            }}
            viewport={{
              once:true
            }}
            className={`content-wrap ${
              reverse ? "reverse-content" : ""
            }`}
          >

            <p className="service-small">
              —— Service
            </p>

            <h2 className="service-title">
              {title}
            </h2>

            <p className="service-desc">
              {desc}
            </p>

            <div className="tags">

              {[
                "Premium",
                "Luxury",
                "Custom"
              ].map((item)=>(

                <span
                  key={item}
                  className="tag"
                >
                  {item}
                </span>

              ))}

            </div>

            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior:"smooth"
                  });
              }}
              className="enquire-btn"
            >
              Enquire now →
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ServiceSection;