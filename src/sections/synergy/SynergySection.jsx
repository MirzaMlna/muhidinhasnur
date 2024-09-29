import { Row } from "react-bootstrap";
import AppSection from "../../components/App/AppSection";

export default function SynergySection() {
  return (
    <AppSection id="SynergySection" title="Sinergi" icon="bi-arrow-repeat">
      <Row className=" px-lg-0 px-2">
        <h5 className="fw-light">
          Sinergi antara Haji Muhidin dan Hasnuriyadi Sulaiman (Hasnur) sebagai
          pasangan pemimpin menawarkan
          <span className="fw-bold bg-primary text-light">
            {" "}
            kombinasi yang kuat dan ideal untuk memimpin Kalimantan Selatan.{" "}
          </span>
          <br />
          <br />
          <span className="fw-bold bg-primary text-light"> Haji Muhidin </span>
          dikenal sebagai sosok yang dermawan, rendah hati, religius, dan
          humoris, serta telah terbukti berhasil dalam membangun Kota
          Banjarmasin selama satu periode kepemimpinannya, sedangkan
          <span className="fw-bold bg-primary text-light"> Hasnur </span> dengan
          jiwa muda, inovatif, dan kreatif, membawa energi baru yang fokus pada
          pengembangan kepemudaan, olahraga, dan pendidikan. <br />
          <br /> Pengalaman mereka sebagai pengusaha sukses memberikan mereka
          keunggulan finansial, menjadikan motivasi mereka untuk memimpin lebih
          pada pengabdian untuk masyarakat. Keduanya memiliki rekam jejak yang
          menunjukkan komitmen mereka dalam meningkatkan kesejahteraan
          masyarakat, melalui pembangunan yang merata, inovasi di bidang sosial,
          pendidikan, dan agama, serta kepemimpinan yang jujur dan bertanggung
          jawab.
        </h5>
      </Row>
    </AppSection>
  );
}
