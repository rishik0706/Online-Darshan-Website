import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img1 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/logo.png";

function MyNavigationLinks() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <a href="#">
              <img src={img1} style={{ height:45 , width: 40, marginTop: -7 }} />
            </a>
          </Navbar.Brand>
          <Navbar.Brand href="#home">Shri Siddhivinayak Ganapati</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link> */}
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to={"/darshan"}>
                Darshan
              </Nav.Link>
              <Nav.Link as={Link} to={"/arti"}>
                Arti
              </Nav.Link>
              <Nav.Link as={Link} to={"/pooja"}>
                Pooja
              </Nav.Link>
              <Nav.Link as={Link} to={"/contactus"}>
                Contact Us
              </Nav.Link>

              <Nav.Link as={Link} to={"/aboutus"}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to={"/donation"}>
                Donation
              </Nav.Link>
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavigationLinks;
