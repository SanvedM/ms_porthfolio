function Features() {

  const features = [
    {
      title: "Responsive Design",
      desc: "Looks perfect on mobile, tablet and desktop."
    },
    {
      title: "Modern UI",
      desc: "Clean SaaS inspired user interface."
    },
    {
      title: "Fast Performance",
      desc: "Built with React + Vite for speed."
    }
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Features
          </h2>

          <p className="text-gray-400 mt-4">
            Everything you need for a modern website.
          </p>

        </div>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                hover:scale-105
                transition
                duration-300
              "
            >

              <div className="
                w-14
                h-14
                bg-purple-600
                rounded-2xl
                mb-6
              "></div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;