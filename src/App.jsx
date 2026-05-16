import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ServiceSection from "./components/ServiceSection";
import Owners from "./components/Owners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import paint1 from "./assets/paint1.png";
import paint2 from "./assets/paint2.png";
import paint4 from "./assets/paint4.png";
import Reviews from "./components/Reviews";

function App() {

  useEffect(() => {

    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);

  }, []);

  const services = [
    {
      title: "Paint Trading (Inventory & Supply)",
      desc: "As a premier dealer, we provide direct access to an extensive inventory of industry-leading paint brands, specialized coatings, primers, and essential application tools. From small residential touch-ups to large-scale industrial bulk orders, our seamless supply chain ensures you have the right productwhen you need it.",
      image: paint1,
      reverse: false
    },
    {
      title: "Interior Design (Integrated Concepts)",
      desc: "We bridge the gap between color selection and complete interior transformation. Our design service integrates spatial planning, lighting analysis, and furniture coordination with our expert paint knowledge. We create cohesive, personalized environments where the wall color ,but the foundation of the room's entire aesthetic.",
      image: paint2,
      reverse: true
    },
    {
      title: "Colour Consultancy (Virtual & On-Site)",
      desc: "Eliminate guesswork with our professional color consultation. We offer both virtual and on-site visits, analyzing architectural features, lighting conditions, and existing decor. Using advanced digital visualization our experts help you confidently select the perfect palette to achieve your desired style.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      reverse: false
    },
    {
      title: "Finishing & Application (Professional Network)",
      desc: "We simplify the final step of your project by connecting you with our exclusive network of certified, insured application professionals. Whether you require meticulous residential repainting or specialized decorative finishes, we match your project with a trusted applicator whose expertise aligns perfectly with your requirements.",
      image: paint4,
      reverse: true
    }
  ];

  return (
    <div className="bg-[#F5F1EA] text-[#2A1810]">

      <Navbar />

      <Hero />

      <Intro />

      {services.map((item, index) => (
        <ServiceSection
          key={index}
          index={index}
          title={item.title}
          desc={item.desc}
          image={item.image}
          reverse={item.reverse}
        />
      ))}

      {/* <Owners /> */}

      <Contact />
      <Reviews/>

      <Footer />

    </div>
  );
}

export default App;