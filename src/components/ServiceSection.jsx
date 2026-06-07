import { motion, AnimatePresence } from "framer-motion";
import "../ServiceSection.css";
import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import car1 from "../assets/carpentry1.jpg";
import car2 from "../assets/carpentry2.jpg";
import car3 from "../assets/carpentry3.jpg";

import int1 from "../assets/interior1.jpg";
import int2 from "../assets/interior2.jpg";
import int3 from "../assets/interior3.jpg";
import int5 from "../assets/interior5.jpeg";

import int6 from "../assets/interior6.jpg";

import paint1 from "../assets/painting1.jpg";
import paint2 from "../assets/painting2.jpg";




import plum1 from "../assets/plumbing1.jpg";
import plum2 from "../assets/plumbing2.jpg";
import plum3 from "../assets/plumbing3.jpg";

import ele1 from "../assets/electric1.jpg";
import ele2 from "../assets/electric2.jpg";



import inter1 from "../assets/interior1.jpeg";
import inter2 from "../assets/interior2.jpeg";
import project5 from "../assets/st_scool.jpeg";
import project6 from "../assets/st_school2.jpeg";





const services = [
  {
    title: "Interior & Architecture",
    icon: "fas fa-pencil-ruler",
    images: [int1,int6,int5,int2,int3,int5],
    desc: "Complete interior design, architectural planning, space optimization, 3D visualization and turnkey project execution for residential and commercial spaces."
  },
    {
    title: "Painting",
    icon: "fas fa-paint-roller",
    images: [paint1,paint2,project5,project6],
    desc: "Premium interior and exterior painting solutions with durable finishes and modern color consultation."
  },

  {
    title: "Carpentry",
    icon: "fas fa-hammer",
    images: [car3,car1, car2],
    desc: "Custom furniture, wardrobes, modular units, wooden partitions and detailed wood craftsmanship."
  },

  {
    title: "Building Structure",
    icon: "fas fa-building",
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200"],
    desc: "Strong and reliable structural construction including foundations, columns, beams, slabs and complete building framework."
  },

  {
    title: "Civil Work",
    icon: "fas fa-hard-hat",
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200"],
    desc: "Site development, masonry, flooring, tiling, renovation and all types of civil construction services."
  },

  {
    title: "Plumbing",
    icon: "fas fa-faucet",
    images: [plum3,plum1,plum2],
    desc: "Professional plumbing installations, piping systems, fittings, repairs and maintenance services."
  },

  {
    title: "Electrical Work",
    icon: "fas fa-bolt",
    images:[ele1,ele2],
    desc: "Complete electrical wiring, lighting systems, panel installations and safety-focused electrical solutions."
  },

  {
    title: "POP Work",
    icon: "fas fa-layer-group",
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"],
    desc: "Modern POP ceilings, decorative wall features, false ceilings and customized interior detailing."
  }
];


export default function ServiceSection() {
  const [active, setActive] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const detailRef = useRef(null);

  useEffect(() => {
    setCurrentImage(0);

    const images = services[active].images;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);


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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5 }}
          >
<div className="detail-image">
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false,
    }}
    navigation
    pagination={{ clickable: true }}
  >
    {services[active].images.map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={services[active].title}
          className="service-slider-image"
        />
      </SwiperSlide>
    ))}
  </Swiper>
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