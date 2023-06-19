import React from "react";
import { FaInstagram , FaFacebook,FaTwitter , FaGoogle , FaLinkedin , FaGithub, FaGem , FaHome , FaEnvelope , FaPhone , FaPrint} from "react-icons/fa";
import "../css/Footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
             <FaFacebook/>
            </a>
            <a href="" className="me-4 text-reset">
              <FaTwitter/>
            </a>
            <a href="" className="me-4 text-reset">
              <FaGoogle/>
            </a>
            <a href="" className="me-4 text-reset">
              <FaInstagram />
            </a>
            <a href="" className="me-4 text-reset">
             <FaLinkedin/>
            </a>
            <a href="" className="me-4 text-reset">
              <FaGithub/>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <FaGem/>
                  About Us
                </h6>
                <p>
                  <a href="Aboutus.html" className="foot text-reset">
                    About the Temple
                  </a>
                </p>
                <p>
                  <a href="#!" className="foot text-reset">
                    Temple Architecture
                  </a>
                </p>
                <p>
                  <a href="#!" className="foot text-reset">
                    Important Dates
                  </a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Personal Seva</h6>
                <p>
                  <a href="#!" className="foot text-reset">
                    Live Darshan
                  </a>
                </p>
                <p>
                  <a href="#!" className="foot text-reset">
                    Online Pooja Booking
                  </a>
                </p>
                <p>
                  <a href="#!" className="foot text-reset">
                    Download App
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                 <FaHome/> CDAC ( Kharghar ) 
                  , Mumbai
                </p>
                <p>
                 <FaEnvelope/>
                  rishikaran0706@gmail.com
                </p>
                <p>
                  <FaPhone/> +91-9958-438226 
                </p>
                <p>
                  <FaPrint/> +91-7841-901447 
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="#">
            Live Darshan
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
