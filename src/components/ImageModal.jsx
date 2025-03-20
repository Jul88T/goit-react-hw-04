import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      {image && (
        <>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className="modal-image"
          />
          <p>Likes: {image.likes}</p>
          <p>Photographer: {image.user.name}</p>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
