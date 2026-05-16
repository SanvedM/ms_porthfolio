import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>MS Trading Company</h2>

          <p>
            Premium paint trading and interior design —
            creating modern and elegant spaces since 2009.
          </p>

        </div>

        {/* VISIT */}

        <div>

          <p className="footer-heading">
            Visit
          </p>

          <div className="footer-content">
            Pune, Maharashtra <br />
            Mon–Sat · 10am–7pm
          </div>

        </div>


        {/* CONTACT */}

        <div>

          <p className="footer-heading">
            Contact
          </p>

          <div className="footer-content">
            info@mstrading.com <br />
            +91 98765 43210
          </div>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 MS Trading Pvt Ltd.
          </p>

          <p>
            Crafted with care.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;