import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/msTrade.jpg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setMenuOpen(false);
  };

  // CLOSE MENU ON RESIZE

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (

    <div className="bg-white">

      <motion.nav

        initial={{
          opacity: 0,
          y: -100,
          backgroundColor: "rgb(249 239 210 / 99%)"
        }}

        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: "white"
        }}

        transition={{
          duration: 1.2,
          ease: "easeOut"
        }}

        className="
          sticky
          top-0
          left-0
          w-full
          z-50
          bg-white
          border-b
          border-[#d9d0c5]
        "
      >

        <div className="container-luxury w-full px-3 sm:px-5 md:px-8">

          <div className="h-16 sm:h-[72px] flex items-center justify-between">

            {/* LOGO */}

            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">

              <img
                src={logo}
                alt="MS Trading Company Logo"
                className="
                  w-10
                  h-10
                  object-cover
                  rounded-full
                  flex-shrink-0
                "
                style={{ width: "55px" }}
              />

              <h1
                className="
                  text-[13px]
                  xs:text-sm
                  sm:text-lg
                  md:text-2xl
                  text-[#2A1810]
                  truncate
                  whitespace-nowrap
                  overflow-hidden
                  leading-tight
                "
              >
                MS Trading Company
              </h1>

            </div>

            {/* DESKTOP MENU */}

            {/* DESKTOP MENU */}

<div
  className="
    hidden
    md:flex
    items-center
    gap-5
    lg:gap-10
    ml-6
  "
>

  <button
    onClick={() => scrollToSection("services")}
    className="
      text-[#2A1810]
      opacity-50
      hover:opacity-100
      transition-all
      duration-300
      whitespace-nowrap
    "
  >
    Services
  </button>

  <button
    onClick={() => scrollToSection("owners")}
    className="
      text-[#2A1810]
      opacity-50
      hover:opacity-100
      transition-all
      duration-300
      whitespace-nowrap
    "
  >
    Owners
  </button>

  <button
    onClick={() => scrollToSection("contact")}
    className="
      text-[#2A1810]
      opacity-50
      hover:opacity-100
      transition-all
      duration-300
      whitespace-nowrap
    "
  >
    Contact
  </button>

  <button

    onClick={() => scrollToSection("contact")}

    className="
      inline-flex
      items-center
      justify-center
      bg-[#2A1810]
      text-white
      min-w-[145px]
      h-[40px]
      rounded-full
      text-sm
      font-light
      tracking-[0.3px]
      hover:bg-[#3a2418]
      transition-all
      duration-300
      px-5
      whitespace-nowrap
    "
  >
    Get in touch
  </button>

</div>

            {/* MOBILE MENU BUTTON */}

            <button

              onClick={() => setMenuOpen(!menuOpen)}

              className="
                md:hidden
                flex
                items-center
                justify-center
                flex-shrink-0
                w-10
                h-10
                ml-2
                text-[#2A1810]
              "
            >

              <div className="space-y-1">

                <span
                  className={`
                    block
                    h-[2px]
                    w-6
                    bg-[#2A1810]
                    transition-all
                    duration-300
                    ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}
                  `}
                />

                <span
                  className={`
                    block
                    h-[2px]
                    w-6
                    bg-[#2A1810]
                    transition-all
                    duration-300
                    ${menuOpen ? "opacity-0" : ""}
                  `}
                />

                <span
                  className={`
                    block
                    h-[2px]
                    w-6
                    bg-[#2A1810]
                    transition-all
                    duration-300
                    ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}
                  `}
                />

              </div>

            </button>

          </div>

          {/* MOBILE MENU */}

          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              ${menuOpen ? "max-h-[400px] py-5" : "max-h-0 py-0"}
            `}
          >

            <div
              className="
                flex
                flex-col
                gap-4
                border-t
                border-[#d9d0c5]
                pt-5
              "
            >

              <button
                onClick={() => scrollToSection("services")}
                className="
                  text-left
                  text-[#2A1810]
                  text-base
                "
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection("owners")}
                className="
                  text-left
                  text-[#2A1810]
                  text-base
                "
              >
                Owners
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="
                  text-left
                  text-[#2A1810]
                  text-base
                "
              >
                Contact
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="
                  bg-[#2A1810]
                  text-white
                  h-[42px]
                  rounded-full
                  text-sm
                  mt-2
                "
              >
                Get in touch
              </button>

            </div>

          </div>

        </div>

      </motion.nav>

      {/* NAVBAR SPACING */}

      <div className=""></div>

    </div>
  );
}

export default Navbar;