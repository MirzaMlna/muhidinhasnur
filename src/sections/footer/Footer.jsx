import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-5 bg-mh-primary text-light`}>
      <Container>
        <Row className="">
          <Col className="text-center">
            <p>
              &copy; {currentYear} Muhidin Hasnur Official. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
