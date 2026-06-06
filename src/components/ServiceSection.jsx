import { motion, AnimatePresence } from "framer-motion";
import "../ServiceSection.css";
import { useState, useRef } from "react";

const services = [
  {
    title: "Interior & Architecture",
    icon: "fas fa-pencil-ruler",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
    desc: "Complete interior design, architectural planning, space optimization, 3D visualization and turnkey project execution for residential and commercial spaces."
  },

  {
    title: "Building Structure",
    icon: "fas fa-building",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
    desc: "Strong and reliable structural construction including foundations, columns, beams, slabs and complete building framework."
  },

  {
    title: "Civil Work",
    icon: "fas fa-hard-hat",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200",
    desc: "Site development, masonry, flooring, tiling, renovation and all types of civil construction services."
  },

  {
    title: "Painting",
    icon: "fas fa-paint-roller",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200",
    desc: "Premium interior and exterior painting solutions with durable finishes and modern color consultation."
  },

  {
    title: "Carpentry",
    icon: "fas fa-hammer",
    image: "https://images.unsplash.com/photo-1513467655676-561b7d489a88?w=1200",
    desc: "Custom furniture, wardrobes, modular units, wooden partitions and detailed wood craftsmanship."
  },

  {
    title: "Plumbing",
    icon: "fas fa-faucet",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200",
    desc: "Professional plumbing installations, piping systems, fittings, repairs and maintenance services."
  },

  {
    title: "Electrical Work",
    icon: "fas fa-bolt",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200",
    desc: "Complete electrical wiring, lighting systems, panel installations and safety-focused electrical solutions."
  },

  {
    title: "POP Work",
    icon: "fas fa-layer-group",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    desc: "Modern POP ceilings, decorative wall features, false ceilings and customized interior detailing."
  }
];
export default function ServiceSection() {
  const [active, setActive] = useState(0);
const detailRef = useRef(null);


  return (
    <section className="services-section" id="services">
      <div className="service-container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>

          {/* <h2>
            End-to-End Construction
            <span> & Interior Solutions</span>
          </h2> */}

          <p>
            From architectural planning to final finishing, we deliver complete
            residential and commercial project solutions.
          </p>
        </div>

        {/* SERVICE CARDS */}

        <div className="service-cards">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                active === index ? "active-card" : ""
              }`}
              onClick={() => {
  setActive(index);

  setTimeout(() => {
    detailRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}}
            >
             <div className="card-icon">
  <i className={service.icon}></i>
</div>
              <h3>{service.title}</h3>

              <p>Professional execution & quality assurance</p>
            </div>
          ))}
        </div>

        {/* DETAIL SECTION */}

        <AnimatePresence mode="wait">
   <div ref={detailRef}>
  <motion.div
            key={active}
            className="service-detail"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.45 }}
          >
            <div className="detail-image">
              <img
                src={services[active].image}
                alt={services[active].title}
              />
            </div>

            <div className="detail-content">
              <span className="detail-tag">Professional Service</span>

              <h2>{services[active].title}</h2>

              <p>{services[active].desc}</p>

              <div className="features-grid">
                <div>✓ Premium Materials</div>
                <div>✓ Skilled Professionals</div>
                <div>✓ Quality Assurance</div>
                <div>✓ Timely Delivery</div>
              </div>

              <button
                className="quote-btn"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Enquire Now →
              </button>
            </div>
          </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}