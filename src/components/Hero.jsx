function Hero() {
  return (
    <section className="relative h-[82vh] overflow-hidden mb-36 md:mb-48">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

<div className="container-luxury w-full">

          <div className="
            max-w-2xl
            pt-16
          " style={{"paddingTop":"100px"}}>

            {/* TOP SMALL TEXT */}
            <p className="
              uppercase
              tracking-[4px]
              text-[11px]
              md:text-xs
              text-[#d7c7b9]
              mb-6
            ">
              Paints • Interior Design • Since 2009
            </p>

            {/* MAIN HEADING */}
            <h1 className="
              text-white
              text-[52px]
              sm:text-[28px]
              md:text-[45px]
              leading-[0.95]
              tracking-[-2px]
              font-light
            ">
              Your Trusted Partner in Color and Design.
            </h1>

            {/* SUBTEXT */}
            <p className="
              text-white/85
              text-lg
              md:text-[18px]
              mt-8
              font-light
              max-w-2xl
            ">
              Supplying the finest paints and professional application services since 2009.
            </p>

            {/* BUTTONS */}
{/* BUTTONS */}

<div
  className="
    flex
    flex-wrap
    gap-4
    mt-12
  "
>

  <button

    onClick={() => {
      document
        .getElementById("services")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }}

    className="
      bg-[#F5F1EA]
      text-[#2A1810]
      px-8
      h-10
      w-40
      rounded-full
      text-sm
      hover:bg-white
      transition-all
    "
  >
    Our services →
  </button>

  <button

    onClick={() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }}

    className="
      border
      border-white/50
      text-white
      px-8
      h-10
      w-40
      rounded-full
      text-sm
      hover:bg-white/10
      transition-all
    "
  >
    Contact us
  </button>

</div>

            {/* SLIDER INDICATORS */}
            <div className="
              flex
              gap-3
              mt-16
            ">

              <div className="w-10 h-[3px] bg-white"></div>

              <div className="w-10 h-[3px] bg-white/40"></div>

              <div className="w-10 h-[3px] bg-white/20"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;