const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className="image-card">
      <img className="image-card__img" src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
