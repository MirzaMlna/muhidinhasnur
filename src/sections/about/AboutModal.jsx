import { Modal, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

AboutModal.propTypes = {
  showModal: PropTypes.bool,
  selectedMH: PropTypes.object,
  handleClose: PropTypes.func,
};
export default function AboutModal({ showModal, selectedMH, handleClose }) {
  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg" className="fw-bold">
          {selectedMH?.name || "Data tidak ditemukan"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          <span className="fw-bold">Nama : </span>
          {selectedMH?.name}
        </h5>
        <h5>
          <span className="fw-bold">Tempat Lahir : </span>
          {selectedMH?.bornLocation}
        </h5>
        <h5>
          <span className="fw-bold">Tanggal Lahir : </span>
          {selectedMH?.bornDate}
        </h5>
        <h5>
          <span className="fw-bold">Usia : </span>
          {selectedMH?.age}
        </h5>
        <h5>
          <span className="fw-bold">Beberapa Pengalaman Menjabat: </span>
        </h5>
        <ListGroup>
          {selectedMH?.experience?.map((exp, index) => (
            <ListGroup.Item key={index}>{exp}</ListGroup.Item>
          ))}
        </ListGroup>
        <p className="mt-3">{selectedMH?.narrative}</p>
      </Modal.Body>
    </Modal>
  );
}
