function Footer() {

  return (

    <footer
      style={{
        background: "#2A120C",
        color: "white",
      }}
    >

      {/* TOP SECTION */}

      <div
        className="
          container-luxury
          grid
          grid-cols-1
          md:grid-cols-3
          gap-16
        "
        style={{
          paddingTop: "40px",
          paddingBottom: "40px"
        }}
      >

        {/* BRAND */}

        <div>

          <h2
            style={{
              fontSize: "32px",
              fontFamily: "Georgia, serif"
            }}
          >
            MS Trading Company
          </h2>

          <p
            className="mt-6 leading-4"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "14px",
              maxWidth: "340px",
              marginTop:"10px"
            }}
          >
            Premium paint trading and interior design — calm,
            considered spaces since 2009.
          </p>

        </div>

        {/* VISIT */}

        <div>

          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
            "
            style={{
              color: "rgba(255,255,255,0.45)"
            }}
          >
            Visit
          </p>

          <p
            className="mt-6 leading-10"
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "16px"
            }}
          >
            14 Atelier Lane <br />
            Design District <br />
            Mon–Sat · 10am–7pm
          </p>

        </div>

        {/* CONTACT */}

        <div>

          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
            "
            style={{
              color: "rgba(255,255,255,0.45)"
            }}
          >
            Contact
          </p>

          <p
            className="mt-6 leading-10"
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "16px"
            }}
          >
            studio@mstradenochre.com <br />
            +1 (415) 555 0142
          </p>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)"
        }}
      >

        <div
          className="
            container-luxury
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
          style={{
            paddingTop: "24px",
            paddingBottom: "24px"
          }}
        >

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "15px"
            }}
          >
            © 2026 MS Trading Pvt Ltd.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "15px"
            }}
          >
            Crafted with care.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;