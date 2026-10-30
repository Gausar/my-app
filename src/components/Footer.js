import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-end mt-3">
              <a href="https://www.linkedin.com/in/gausar-amangyeldi-17308b298/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/gausar.amangyeldi.9/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/a_gausar/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://youtube.com/@gausar?si=wjiEQ71aYLjQdOI1" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="YouTube" /></a>
            </div>
            <p>Copyright 2026. Gausar Amangyeldi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}