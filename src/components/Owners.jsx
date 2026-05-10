function Owners() {

  const owners = [
    {
      name: "Aniket Mayangade",
      role: "Founder · Paint Trading",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "Fifteen years sourcing the world's most considered architectural paints. Karim leads our trading house and trade programme."
    },
    {
      name: "Lina Marchetti",
      role: "Co-Founder · Interior Design",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "An interior designer trained in Milan, Lina shapes every project with her quiet, restrained eye for material and light."
    }
  ];

  return (

    <section
      style={{
        background: "white",
        paddingTop: "40px",
        paddingBottom: "40px",
        position: "relative",
        overflow: "hidden",

        /* SOFT GRID */
        backgroundImage: `
          linear-gradient(to right, rgba(60,40,20,0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(60,40,20,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "140px 140px"
      }}
      id="owners"
    >

      {/* CENTER GLOW */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.45) 0%,
              rgba(255,255,255,0.18) 35%,
              rgba(255,255,255,0) 70%
            )
          `,
          pointerEvents: "none"
        }}
      />

      {/* VERTICAL LUXURY LINES */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            repeating-linear-gradient(
              to right,
              transparent 0px,
              transparent 95px,
              rgba(80,60,40,0.03) 96px,
              transparent 97px
            )
          `,
          pointerEvents: "none"
        }}
      />

      <div
        className="w-full text-center"
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          position: "relative",
          zIndex: 2
        }}
      >

        <p className="
          uppercase
          tracking-[4px]
          text-sm
          text-[#7b6d60]
        ">
          The Studio
        </p>

        <h2
          className="
            text-3xl
            md:text-5xl
            mt-6
          "
          style={{ color: "#2d1d16" }}
        >
          Meet the owners
        </h2>

        <p
          className="
            m-6
            text-m
          "
          style={{ color: "#6c5f55", padding:"10px 0px 20px 0px" }}
        >
          Two founders, one shared belief: a good room is a quiet one.
        </p>

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-center
            items-start
            gap-24
            mt-24
          "
        >

          {owners.map((item, index) => (

            <div
              key={index}
              className="text-center"
              style={{ maxWidth: "420px" }}
            >

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "999px",
                  objectFit: "cover",
                  margin: "0 auto"
                }}
              />

              <h3
                className="mt-10"
                style={{
                  fontSize: "22px",
                  padding: "10px",
                  color: "#2d1d16",
                  fontFamily: "Georgia, serif"
                }}
              >
                {item.name}
              </h3>

              <p
                className="
                  uppercase
                  tracking-[2px]
                  text-sm
                  mt-4
                "
                style={{ color: "#8b7b6f" }}
              >
                {item.role}
              </p>

              <p
                className="mt-8 leading-6"
                style={{
                  color: "#6c5f55",
                  fontSize: "14px",
                  padding:"5px"
                }}
              >
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Owners;