import PropTypes from "prop-types";
import { Container, Navbar, Nav } from "react-bootstrap";

const AppNavbar = ({ handleIsDarkTheme, isDarkTheme }) => {
  return (
    <Navbar data-bs-theme="dark" className="sticky-top shadow bg-mh-primary">
      <Container>
        <Navbar.Brand className="fw-bold">MUHIDIN HASNUR</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="https://www.tiktok.com/@muhidinhasnur">
            <i className={`fs-5 bi bi-tiktok`}></i>
          </Nav.Link>
          <Nav.Link>
            <i
              onClick={handleIsDarkTheme}
              className={`fs-5 bi ${
                isDarkTheme ? "bi-sun-fill" : "bi-moon-stars"
              }`}
            ></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

AppNavbar.propTypes = {
  handleIsDarkTheme: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};

export default AppNavbar;
