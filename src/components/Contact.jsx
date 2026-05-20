import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "../Contact.css";

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
      toast.success(
        "Message sent successfully!"
      );

      form.current.reset();
    })
    .catch((error) => {
      console.log(error);

      toast.error(
        "Failed to send message"
      );
    });
  };

  return (
    <>
      <Toaster />

      <section
        id="contact"
        className="contact"
      >

        <div className="contact-container">

          <div className="contact-grid">

            {/* LEFT */}

            <div>

              <p className="contact-tag">
                CONTACT
              </p>

              <h2 className="contact-title">
                Let's design your
                <span>
                  {" "}next wall.
                </span>
              </h2>

              <p className="contact-sub">
                Discover premium paints, texture finishes, and expert guidance for homes, offices, and commercial projects
              </p>

              <div className="contact-info">

                {[
                  ["📞","PHONE","+919082249851/+917045286805"],
                  ["✉️","EMAIL","mstradingcompany348@gmail.com"],
                  ["📍","ADDRESS","Office No-7 Near Yatri Hotel,Santacruiz(E) India"],
                  ["🕒","WORKING HOURS","Mon–Sat · 10AM–7PM"]
                ].map(
                  ([icon,title,value])=>(

                  <div
                    key={title}
                    className="info-box"
                  >

                    <div className="info-icon">
                      {icon}
                    </div>

                    <div>
                      <p className="small">
                        {title}
                      </p>

                      <h3>
                        {value}
                      </h3>
                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* FORM */}

            <div className="form-box">

              <h3>
                Request a free consultation
              </h3>

              <p>
                We'll call back within
                30 minutes.
              </p>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form"
              >

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell us about your project..."
                />

                <button type="submit">
                  Send Inquiry →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;