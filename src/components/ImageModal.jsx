import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <p>{image.description || "No description"}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
