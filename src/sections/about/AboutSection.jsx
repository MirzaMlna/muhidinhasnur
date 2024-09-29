import { useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import AboutModal from "./AboutModal";
import AppSection from "../../components/App/AppSection";

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMH, setSelectedMH] = useState(null);

  const handleShowModal = (data) => {
    setSelectedMH(data);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const hMuhidin = {
    name: "H. Muhidin",
    bornLocation: "Binuang",
    bornDate: "06 Mei 1958",
    age: "66",
    experience: [
      "Anggota DPRD Kabupaten Tapin (2004-2009)",
      "Anggota DPRD Provinsi Kalsel (2009-2010)",
      "Walikota Banjarmasin (2010-2015)",
      "Wakil Gubernur Kalsel (2020-2024)",
    ],
    narrative:
      '"H. Muhidin" adalah seorang politisi Indonesia yang dikenal sebagai Wakil Gubernur Kalimantan Selatan sejak tahun 2021. Sebelumnya, ia juga pernah menjabat sebagai Wali Kota Banjarmasin dari 2010 hingga 2015. Sebagai seorang tokoh yang cukup berpengaruh di Kalimantan Selatan, Muhidin memiliki latar belakang pengusaha sebelum terjun ke dunia politik. Selama karier politiknya, ia dikenal dengan sejumlah kebijakan yang mendukung pembangunan infrastruktur dan ekonomi di daerahnya. Selain itu, ia juga aktif dalam berbagai kegiatan sosial dan kemasyarakatan di wilayah Kalimantan Selatan.',
  };

  const hasnur = {
    name: "H. Hasnuryadi Sulaiman",
    bornLocation: "Banjarmasin",
    bornDate: "21 Juni 1975",
    age: "49",
    experience: [
      "CEO Barito Putera",
      "Komisaris - PT. Putera Barito Berbakti",
      "Komisaris - PT. Hasnur Citra Terpadu",
      "Komisaris - PT. Hasnur Jaya Utama",
      "Anggota Dewan Pembina - Yayasan Hasnur Centre",
    ],
    narrative:
      '"H. Hasnuryadi Sulaiman" adalah pengusaha dan politisi asal Kalimantan Selatan, Indonesia, serta putra dari pendiri Hasnur Group, Haji Sulaiman HB. Hasnur Group bergerak di berbagai sektor seperti pertambangan, perkebunan, dan transportasi. Selain itu, Hasnuryadi juga merupakan pemilik klub sepak bola Barito Putera, yang telah menjadi tim kompetitif di liga Indonesia. Di dunia politik, ia pernah menjabat sebagai anggota DPR RI dari Partai Golkar, mewakili Kalimantan Selatan, dan dikenal atas kontribusinya terhadap pembangunan daerahnya di bidang ekonomi, olahraga, dan sosial.',
  };

  return (
    // <FadeIn>
    //   <section id="aboutSection" className={`pt-5 pb-5`}>
    //     <Container className="text-center">
    //       <h1 className="text-start mb-5 fw-bold">
    //         <i className="bi bi-people-fill text-mh-primary"> </i>Biografi
    //         <div className="section-title-line"></div>
    //       </h1>
    <AppSection id="AboutSection" title="Biografi" icon="bi-people-fill">
      <Row className="text-center">
        <Col md={6} className="mb-lg-0 mb-5">
          <Image
            className="shadow rounded-5"
            width="300"
            src="h-muhidin.webp"
            fluid
          />
          <h2 className="mt-3">H. Muhidin</h2>
          <p className="fst-italic">Calon Gubernur Kalsel</p>
          <Button
            variant="primary"
            className="bg-mh-primary text-light"
            onClick={() => handleShowModal(hMuhidin)}
          >
            Tampilkan Biografi
          </Button>
        </Col>
        <Col md={6}>
          <Image
            className="shadow rounded-5"
            width="300"
            src="h-hasnur.webp"
            fluid
          />
          <h2 className="mt-3">H. Hasnuryadi Sulaiman</h2>
          <p className="fst-italic">Calon Wakil Gubernur Kalsel</p>
          <Button
            variant="primary"
            className="bg-mh-primary text-light"
            onClick={() => handleShowModal(hasnur)}
          >
            Tampilkan Biografi
          </Button>
        </Col>
      </Row>
      <AboutModal
        showModal={showModal}
        selectedMH={selectedMH}
        handleClose={handleCloseModal}
      />
    </AppSection>

    //     </Container>
    //   </section>
    // </FadeIn>
  );
}
