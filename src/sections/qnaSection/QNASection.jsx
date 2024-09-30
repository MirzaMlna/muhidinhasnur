import PropTypes from "prop-types";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import AppSection from "../../components/App/AppSection";

const QNASection = ({ isDarkTheme }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const QNAData = [
    {
      question: "Pasangan Muhidin-Hasnur Nomor Berapa ?",
      answer:
        "Berdasarkan pengundian nomor urut pasangan calon pada tanggal 23 September 2024, pasangan Muhidin-Hasnur mendapatkan nomor urut 1.",
    },
    {
      question: "Kenapa Harus Muhidin-Hasnur ?",
      answer:
        "Karena pasangan Muhidin Hasnur memiliki sinergi yang saling melengkapi. Haji Muhidin dikenal sebagai sosok yang dermawan, rendah hati, religius, dan humoris, serta telah terbukti berhasil dalam membangun Kota Banjarmasin selama satu periode kepemimpinannya, sedangkan Hasnur dengan jiwa muda, inovatif, dan kreatif, membawa energi baru yang fokus pada pengembangan kepemudaan, olahraga, dan pendidikan.",
    },
    {
      question: "H. Muhidin Orang Mana ?",
      answer:
        "Bapak H. Muhidin asli orang banua, beliau lahir di Binuang pada 6 Mei 1958. Namun banyak oknum yang mengatakan bahwa Bapak H. Muhidin adalah Orang Madura, nyatanya pernyataan itu salah dan ketika dimintai keterangan tidak ada jawaban dari oknum.",
    },
    {
      question: "Apa Tujuan Pencalonan ?",
      answer:
        "Selama menjabat sebagai Walikota Banjarmasin, beliau tidak pernah menyentuh gaji, honor, insentif, atau uang perjalanan dinas. Semua hasil tersebut dikumpulkan hingga akhir masa jabatan dan disumbangkan untuk pembangunan dan perbaikan masjid serta mushola. Sejak awal dilantik, beliau sudah berjanji untuk menyumbangkan seluruh penghasilan selama menjabat. Tindakan ini sangat langka di tengah banyaknya pemimpin yang memanfaatkan jabatan untuk kepentingan pribadi. Sebagai pengusaha sukses, beliau sudah berkecukupan dan ingin mengabdikan diri demi kesejahteraan masyarakat dalam berbagai bidang.",
    },
    {
      question: "Apa Saja Pencapaian H. Muhidin ?",
      answer:
        "Saat menjabat sebagai walikota, pembangunan infrastruktur, pelayanan publik, dan kebersihan kota meningkat menjadi lebih baik. Selain itu di bawah kepemimpinannya, Banjarmasin meraih beberapa penghargaan, termasuk Adipura, sebuah penghargaan nasional di Indonesia untuk kota-kota yang berhasil menjaga kebersihan dan pengelolaan lingkungan. Saat menjadi wakil Gubernur, beliau berkontribusi dalam pengembangan berbagai sektor, termasuk infrastruktur, pendidikan, dan kesehatan di provinsi Kalimantan Selatan. ",
    },
    {
      question: "Apa Saja Pencapaian H. Hasnuryadi Sulaiman ?",
      answer:
        "Saat menjadi anggota DPR beliau aktif dalam berbagai komisi, termasuk komisi yang menangani bidang pendidikan, olahraga, pariwisata, dan ekonomi kreatif. Selain itu, di bawah kepemimpinannya, Barito Putera terus berkembang sebagai salah satu klub terkemuka di Indonesia. Ia berperan penting dalam pengembangan talenta muda melalui akademi sepak bola Barito Putera. H. Hasnuryadi Sulaiman juga aktif dalam kegiatan sosial dan pendidikan. Melalui yayasan yang didirikan oleh keluarganya, Yayasan Hasnur Centre, ia mendukung berbagai inisiatif sosial, termasuk pendidikan, kesehatan, dan bantuan kemanusiaan di Kalimantan Selatan. Yayasan ini juga mendukung program beasiswa dan pelatihan keterampilan bagi masyarakat setempat.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AppSection id="QNASection" title="Tanya Jawab" icon="bi-chat-dots">
      <i className={`fs-4 fw-bold ${isDarkTheme ? "text-light" : "text-dark"}`}>
        Tekan pertanyaan untuk menampilkan jawaban{" "}
        <i className="bi bi-hand-index"></i>
      </i>
      <ListGroup
        className="mt-2"
        data-bs-theme={isDarkTheme ? "dark" : "light"}
      >
        {QNAData.map((item, index) => (
          <div key={index}>
            <ListGroup.Item
              action
              onClick={() => handleToggle(index)}
              aria-controls={`answer-${index}`}
              aria-expanded={openIndex === index}
            >
              <div className="d-flex justify-content-between align-items-center">
                {item.question}
                <i className="bi bi-fingerprint"></i>
              </div>
            </ListGroup.Item>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.3, ease: "easeInOut" },
                  }}
                  className="p-3 overflow-hidden bg-body"
                >
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                  >
                    {item.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </ListGroup>
    </AppSection>
  );
};

QNASection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default QNASection;
