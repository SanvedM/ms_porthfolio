import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_phx6l5q",
      "template_sz5wpoi",
      form.current,
      "laVgj3NfHvxUiBthE"
    )

    .then(() => {

      toast.success("Message sent successfully!");

      form.current.reset();

    })

    .catch((error) => {

      console.log(error);

      toast.error("Failed to send message");

    });
  };

  return (
    <>
  <Toaster
    position="top-right"
    toastOptions={{
      style: {
        background: "#2A1810",
        color: "#fff",
        borderRadius: "12px",
        padding: "14px 18px"
      }
    }}
  />


    <section
      id="contact"
      style={{
        background: "#dbd4c82",
        paddingTop: "70px",
        paddingBottom: "70px"
      }}
    >

      <div
        className="container-luxury"
        style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >

        <div className="text-center">

          <p
            className="
              uppercase
              tracking-[2px]
              text-sm
            "
            style={{ color: "#7b6d60" }}
          >
            Get in touch
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              mt-6
              leading-tight
            "
            style={{
              color: "#2A1810",
              fontFamily: "Georgia, serif"
            }}
          >
            Let's talk about your space.
          </h2>

          <p
            className="mt-8 text-m"
            style={{
              color: "#7b6d60",
              padding: "10px"
            }}
          >
            Drop us a line — we reply within two working days.
          </p>

        </div>

        {/* FORM */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-24"
          style={{
            maxWidth: "580px",
            margin: "0 auto"
          }}
        >

          {/* NAME */}

          <div style={{ marginBottom: "60px" }}>

            <label
              className="
                uppercase
                tracking-[2px]
                text-sm
              "
              style={{ color: "#7b6d60" }}
            >
              Your Name
            </label>

            <input
              type="text"
              name="user_name"
              required
              className="
                w-full
                bg-transparent
                outline-none
                mt-6
                pb-4
              "
              style={{
                borderBottom: "1px solid #b9aa9b",
                fontSize: "18px",
                color: "#2A1810"
              }}
            />

          </div>

          {/* EMAIL */}

          <div style={{ marginBottom: "60px" }}>

            <label
              className="
                uppercase
                tracking-[2px]
                text-sm
              "
              style={{ color: "#7b6d60" }}
            >
              Email Address
            </label>

            <input
              type="email"
              name="user_email"
              required
              className="
                w-full
                bg-transparent
                outline-none
                mt-6
                pb-4
              "
              style={{
                borderBottom: "1px solid #b9aa9b",
                fontSize: "18px",
                color: "#2A1810"
              }}
            />

          </div>

          {/* MESSAGE */}

          <div>

            <label
              className="
                uppercase
                tracking-[2px]
                text-sm
              "
              style={{ color: "#7b6d60" }}
            >
              How can we help?
            </label>

            <textarea
              rows="4"
              name="message"
              required
              placeholder="A few lines about your project..."
              className="
                w-full
                bg-transparent
                outline-none
                mt-6
                pb-4
                resize-none
              "
              style={{
                borderBottom: "1px solid #b9aa9b",
                fontSize: "18px",
                color: "#2A1810"
              }}
            ></textarea>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="
              mt-16
              px-10
              py-4
              rounded-full
              text-white
              transition
              duration-300
            "
            style={{
              background: "#2A1810",
              fontSize: "16px",
              width:"140px",
              height:"30px"
            }}
          >
            Send enquiry →
          </button>

        </form>

      </div>

    </section>
</>
  );
}

export default Contact;