import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-mh-primary text-light">
      <Container>
        <Row className="text-center fs-6">
          <Col>
            <p className="mt-4">
              &copy;{" "}
              <a
                href="https://muhidinhasnur.id/"
                className="text-decoration-none text-light"
              >
                MUHIDINHASNUR
              </a>{" "}
              Created By Mirza Maulana {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
