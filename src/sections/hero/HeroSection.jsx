import PropTypes from "prop-types";
import { Container, Row, Col, Image } from "react-bootstrap";

HeroSection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

const HeroSection = ({ isDarkTheme }) => {
  return (
    <section
      id="heroSection"
      className="d-flex align-items-center justify-content-center py-5"
    >
      <Container className="">
        <Row className="align-items-center">
          <Col md={5}>
            <Image src="hero-image.webp" fluid alt="MuhidinHasnur" />
          </Col>
          <Col md={1}></Col>
          <Col md={6} className="text-md-start text-center mt-lg-0 mt-4">
            <h1 className="display-4 fw-bold">MUHIDIN-HASNUR</h1>
            <p className="lead typewriter">Bekerja Bersama Merangkul Semua</p>
            <audio
              controls
              loop={true}
              data-bs-theme={isDarkTheme ? "light" : "dark"}
              src="mh_jingle.mp3"
            >
              Minta Rela, Browser Pian Kada Mendukung Gasan Memutar Lagu.
            </audio>
            {/* <p className="fw-bold">&uarr; Putar Lagu Muhidin-Hasnur &uarr;</p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
