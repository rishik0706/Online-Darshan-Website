import React from "react";
import { FaInstagram , FaFacebook,FaTwitter , FaGoogle , FaLinkedin , FaGithub } from "react-icons/fa";

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
              {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
            </a>
            <a href="" className="me-4 text-reset">
              {/* <FontAwesomeIcon icon={solid("twitter")} />  */}
            </a>
            <a href="" className="me-4 text-reset">
              {/* <FontAwesomeIcon icon="fab fa-google"/> */}
            </a>
            <a href="" className="me-4 text-reset">
              <FaInstagram />
            </a>
            <a href="" className="me-4 text-reset">
              {/* <FontAwesomeIcon icon="fab fa-linkedin"/> */}
            </a>
            <a href="" className="me-4 text-reset">
              {/* <FontAwesomeIcon icon="fab fa-github"/> */}
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {/* <FontAwesomeIcon icon="fas fa-gem me-3" /> */}
                  About Us
                </h6>
                <p>
                  <a href="Aboutus.html" className="text-reset">
                    About the Temple
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Temple Architecture
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Important Dates
                  </a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Personal Seva</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Live Darshan
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Online Pooja Booking
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Download App
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  {/* <FontAwesomeIcon icon="fas fa-home me-3" /> CDAC ( Kharghar ) */}
                  , Mumbai
                </p>
                <p>
                  {/* <FontAwesomeIcon icon="fas fa-envelope me-3" /> */}
                  rishikaran0706@gmail.com
                </p>
                <p>
                  {/* <FontAwesomeIcon icon="fas fa-phone me-3" /> +91-9958-438226 */}
                </p>
                <p>
                  {/* <FontAwesomeIcon icon="fas fa-print me-3" /> +91-7841-901447 */}
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
