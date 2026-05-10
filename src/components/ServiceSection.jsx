import { motion } from "framer-motion";

function ServiceSection({
  title,
  desc,
  image,
  reverse
}) {

  return (

    <section
      className="py-32 md:py-40 mt-32 md:mt-40"
      id="services"
    >

      <div
        className="container-luxury"
        style={{ paddingBottom: "60px" }}
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* IMAGE */}
{/* IMAGE */}

<motion.div
  initial={{
    opacity: 0,
    y: 80
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  transition={{
    duration: 1
  }}
  viewport={{ once: true }}
  className={`
    ${reverse ? "lg:order-2" : ""}
    rounded-2xl
  `}
>

  <div className="relative rounded-2xl overflow-hidden">

    <div
      className="
        absolute
        inset-0
        bg-black/0
        group-hover:bg-black/20
        transition-all
        duration-500
        z-10
      "
    />
<img
  src={image}
  alt={title}
  loading="eager"
  decoding="async"
  draggable="false"
  fetchPriority="high"
  onError={(e) => {
    console.log("Failed image:", image);
  }}
className="
  block
  w-[280px]
  h-[280px]
  object-cover
  mx-auto
  rounded-2xl
  transition-all
  duration-700
  group-hover:scale-110
  group-active:scale-110
"  style={{height:"320px",}}
/>

  </div>

</motion.div>
          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? -120 : 120
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1.6
            }}
            viewport={{ once: true }}
            className={`
              flex
              flex-col
              gap-2
              ${reverse ? "lg:order-1" : ""}
            `}
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-[#7b6d60]
              "
            >
              —— Service
            </p>

            <h2
              className="
  text-4xl
  leading-tight
  hover:text-orange-500
  active:text-orange-500
  transition
  duration-300
  cursor-pointer
"
            >
              {title}
            </h2>

            <p
              className="
                text-[#6c5f55]
                text-base
                leading-relaxed
              "
            >
              {desc}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">

  <span
    className="
      px-4
      py-1
      rounded-full
      text-[11px]
      tracking-[3px]
      uppercase
      font-light
      text-[#7b6d60]
      border
      border-[#d8cfc4]
      bg-[#f8f4ef]
      hover:bg-[#2A1810]
      hover:text-white
      active:bg-[#2A1810]
      active:text-white
      transition-all
      duration-300
    "
    style={{
      fontFamily: "Georgia, serif",
      padding:"2px 5px"
    }}
  >
    Premium
  </span>

  <span
    className="
      px-4
      py-1
      rounded-full
      text-[11px]
      tracking-[3px]
      uppercase
      font-light
      text-[#7b6d60]
      border
      border-[#d8cfc4]
      bg-[#f8f4ef]
      hover:bg-[#2A1810]
      hover:text-white
      active:bg-[#2A1810]
      active:text-white
      transition-all
      duration-300
    "
    style={{
      fontFamily: "Georgia, serif",
      padding:"2px 5px"
    }}
  >
    Luxury
  </span>

  <span
    className="
      px-4
      py-1
      rounded-full
      text-[11px]
      tracking-[3px]
      uppercase
      font-light
      text-[#7b6d60]
      border
      border-[#d8cfc4]
      bg-[#f8f4ef]
      hover:bg-[#2A1810]
      hover:text-white
      active:bg-[#2A1810]
      active:text-white
      transition-all
      duration-300
    "
    style={{
      fontFamily: "Georgia, serif",
      padding:"2px 5px"
    }}
  >
    Custom
  </span>

</div>

<button

  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  }}

 className="
  border-b
  border-black
  pb-2
  w-fit
  hover:text-orange-500
  hover:border-orange-500
  active:text-orange-500
  active:border-orange-500
  transition
  duration-300
"
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