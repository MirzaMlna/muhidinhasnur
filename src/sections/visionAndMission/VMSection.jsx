import { Col, ListGroup, Row } from "react-bootstrap";
import AppSection from "../../components/App/AppSection";

export default function VMSection() {
  const visi = [
    {
      visi: "Berkelanjutan",
      icon: "bi-recycle",
      explaination:
        "Melanjutkan Pembangunan periode sebelumnya dan Pembangunan yang seimbang antara sosial budaya, ekonomi, dan lingkungan",
    },
    {
      visi: "Berbudaya",
      icon: "bi-palette",
      explaination:
        "Masyarakat yang memilki warisan budaya, norma, dan nilai-nilai yang membentuk identitas dan memilki pikiran dan akal yang maju.",
    },
    {
      visi: "Religi",
      icon: "bi-people",
      explaination:
        "Masyarakat yang memiliki kepercayaan kepada adanya Tuhan dan memiliki nilai moral serta etika.",
    },
    {
      visi: "Sejahtera",
      icon: "bi-bar-chart",
      explaination:
        "Kebutuhan Jasmani, Rohani, dan rasa aman yang terpenuhi bagi masyarakat.",
    },
    {
      visi: "Gerbang Logistik Kalimantan",
      icon: "bi-box-seam",
      explaination:
        "Pintu keluar masuk untuk distribusi barang dan Jasa keseluruh Kalimantan, mulai dari pusat produksi - pengolahan - pergudangan - pengiriman ke konsumen.",
    },
  ];

  return (
    <AppSection id="VMSection" title="Visi dan Misi" icon="bi-hand-thumbs-up">
      <div className="px-lg-0 px-2">
        <h3 className="fw-bold">Visi</h3>
        <h5 className="fw-light">
          KALSEL BEKERJA (Berkelanjutan, Berbudaya, Religi, Dan Sejahtera)
          Menuju Gerbang Logistik Kalimantan.
        </h5>

        <Row className="mb-5">
          {visi.map((item, index) => (
            <Col
              key={index}
              md={5}
              className="mt-3 bg-mh-primary p-3 me-3 rounded text-light"
            >
              <h4 className="fw-bold">
                {item.visi} <i className={`bi ${item.icon} text-light`}></i>
              </h4>
              <p>{item.explaination}</p>
            </Col>
          ))}
        </Row>

        <h3 className="fw-bold">Misi</h3>
        <ListGroup>
          <ListGroup.Item>
            Pembangunan Manusia Yang Unggul, Berbudaya, Religi, Dan Berakhlak
            Mulia
          </ListGroup.Item>
          <ListGroup.Item>Pembangunan Infrastruktur Yang Handal</ListGroup.Item>
          <ListGroup.Item>
            Pertumbuhan Ekonomi Yang Berkelanjutan, Merata, Dan Syariah
          </ListGroup.Item>
          <ListGroup.Item>
            Penguatan Ketahanan Terhadap Peubahan Iklim
          </ListGroup.Item>
          <ListGroup.Item>
            Tata Kelola Pelayanan Yang Mudah dan Cepat
          </ListGroup.Item>
        </ListGroup>
      </div>
    </AppSection>
  );
}
