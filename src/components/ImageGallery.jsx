import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="image-gallery">
      <ul className="image-gallery__list">
        {images.map((image) => (
          <li key={image.id} className="image-gallery__item">
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => onImageClick(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
