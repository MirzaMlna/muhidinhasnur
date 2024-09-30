import PropTypes from "prop-types";
import { Col, Row, Card } from "react-bootstrap";
import AppSection from "../../components/App/AppSection";

const CampaignPromisesSection = ({ isDarkTheme }) => {
  const datas = [
    {
      image: "./assets/promises/1.webp",
      promise: "Mendorong Pesantren Modern Terpadu.",
    },
    {
      image: "./assets/promises/2.webp",
      promise: "Mendorong Program Paket A, B, dan C.",
    },
    {
      image: "./assets/promises/3.webp",
      promise:
        "Peningkatan kualitas dan akses pendidikan, kesehatan, serta jaminan sosial.",
    },
    {
      image: "./assets/promises/4.webp",
      promise: "Peningkatan transportasi publik ke daerah pelosok.",
    },
    {
      image: "./assets/promises/5.webp",
      promise: "Pembangunan Jembatan Pulau Laut.",
    },
    {
      image: "./assets/promises/6.webp",
      promise: "Pembangunan pelabuhan Internasioal Mekar Putih",
    },
    {
      image: "./assets/promises/7.webp",
      promise: "Mendorong Peningkatan Bandara Internasional Syamsudin Noor",
    },
    {
      image: "./assets/promises/8.webp",
      promise:
        "Meningkatkan Olahraga dan pembangunan stadion berstandar Internasional.",
    },
    {
      image: "./assets/promises/9.webp",
      promise: "Memperkuat ketahanan pangan dan pengembangan ekonomi kreatif.",
    },
    {
      image: "./assets/promises/10.webp",
      promise: "Meningkatkan pariwisata dan Kebudayaan",
    },
  ];

  return (
    <AppSection
      id="CampaignPromises"
      title="Janji Kampanye"
      icon="bi-megaphone"
    >
      <i className={`fs-4 fw-bold ${isDarkTheme ? "text-light" : "text-dark"}`}>
        Geser Untuk Melihat Janji Lainnya &#10609;
      </i>

      <Row className="px-lg-0 px-2 mt-2 overflow-x-scroll flex-nowrap">
        {datas.map((data, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="px-1">
            <Card
              data-bs-theme={isDarkTheme ? "dark" : "light"}
              className="mb-3"
            >
              <Card.Img
                variant="top"
                src={data.image ? data.image : "./null-image.webp"}
              />
              <Card.Body>
                <Card.Title>{data.promise}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </AppSection>
  );
};

CampaignPromisesSection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default CampaignPromisesSection;
