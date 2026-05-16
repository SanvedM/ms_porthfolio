import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Reviews.css";

function Reviews() {

  const defaultReviews = [
    {
      name: "Rahul Sharma",
      role: "Home Owner",
      text: "Excellent paint quality and very professional service. The finish completely changed our home.",
      rating: "★★★★★"
    },
    {
      name: "Priya Mehta",
      role: "Interior Designer",
      text: "Their textures and premium shades are outstanding. Delivery and support were smooth.",
      rating: "★★★★★"
    },
    {
      name: "Amit Patel",
      role: "Commercial Client",
      text: "We used their products for office interiors and the results looked premium.",
      rating: "★★★★★"
    },
    {
      name: "Sneha Verma",
      role: "Customer",
      text: "Great consultation and very high-quality products. Would recommend again.",
      rating: "★★★★★"
    }
  ];

  const [reviews, setReviews] = useState(() => {
    const saved =
      localStorage.getItem("reviews");

    return saved
      ? JSON.parse(saved)
      : defaultReviews;
  });

  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    text: ""
  });

  useEffect(() => {
    localStorage.setItem(
      "reviews",
      JSON.stringify(reviews)
    );
  }, [reviews]);

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setCurrent(
        (prev) =>
          (prev + 1) %
          reviews.length
      );
    }, 3500);

    return () =>
      clearInterval(timer);

  }, [pause, reviews.length]);


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.role ||
      !form.text
    ) return;

    const newReview = {
      ...form,
      rating: "★★★★★"
    };

    setReviews([
      ...reviews,
      newReview
    ]);

    setCurrent(reviews.length);

    setForm({
      name: "",
      role: "",
      text: ""
    });
  };


  return (
    <section
      className="review-section"
      id="reviews"
    >
      <div className="container-luxury">

        
        <h2 className="review-title">
          What Our Customers Say
        </h2>


        <div
          className="review-slider"
          onMouseEnter={() =>
            setPause(true)
          }
          onMouseLeave={() =>
            setPause(false)
          }
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity:0,
                y:50
              }}
              animate={{
                opacity:1,
                y:0
              }}
              exit={{
                opacity:0,
                y:-50
              }}
              transition={{
                duration:.5
              }}
              className="review-card"
            >

              <div className="stars">
                {
                  reviews[current]
                  .rating
                }
              </div>

              <p className="review-text">
                "
                {
                  reviews[current]
                  .text
                }
                "
              </p>

              <div className="review-user">
                <h4>
                  {
                    reviews[current]
                    .name
                  }
                </h4>

                <span>
                  {
                    reviews[current]
                    .role
                  }
                </span>
              </div>

            </motion.div>

          </AnimatePresence>

        </div>


        <div className="dots">

          {reviews.map(
            (_,i)=>(
            <span
              key={i}
              className={`dot ${
                i===current
                ? "active"
                : ""
              }`}
              onClick={()=>
                setCurrent(i)
              }
            />
          ))}

        </div>



        {/* REVIEW FORM */}

        {/* <div className="review-form-box">

          <h3>
            Leave a Review
          </h3>

          <form
            className="review-form"
            onSubmit={
              handleSubmit
            }
          >

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e)=>
                setForm({
                  ...form,
                  name:e.target.value
                })
              }
            />

            <input
              type="text"
              placeholder="Role"
              value={form.role}
              onChange={(e)=>
                setForm({
                  ...form,
                  role:e.target.value
                })
              }
            />

            <textarea
              placeholder="Write review..."
              value={form.text}
              onChange={(e)=>
                setForm({
                  ...form,
                  text:e.target.value
                })
              }
            />

            <button>
              Submit Review
            </button>

          </form>

        </div> */}

      </div>
    </section>
  );
}

export default Reviews;