import Carousel from "react-bootstrap/Carousel";
import img1 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/ganesh1.jpg";
import img2 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/ganesh2.jpeg";
import img3 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/ganesh3.jpeg";
function Carousels(){
    return(<>
        <div style={{ height: 700 }} className="row justify-content-center">
        <Carousel data-bs-theme="dark" className="col-10">
          <Carousel.Item>
            <img
              className="d-block h-400 w-100"
              src={img1}
              alt="First slide"
              style={{ height: 700 }}
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 text-center"
              src={img2}
              alt="Second slide"
              style={{ height: 700, textAlign: "center" }}
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              style={{ height: 700 }}
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>)
}

export default Carousels;