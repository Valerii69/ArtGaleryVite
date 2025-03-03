import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import PropTypes from "prop-types";
import "./artCard.css";

export function ArtCard({ artist, title, price, src, date, width, height }) {
  console.log("✅ ArtCard rendered:", title);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imageSrc) => {
    console.log("🔍 openModal executed, imageSrc:", imageSrc);
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <div id="cardContainer" className="card-container card-border">
      <img
        id="cardImage"
        loading="lazy"
        src={src}
        alt={`Artwork ${title} by ${artist}`}
        className="card-image"
        width={width}
        height={height}
        onClick={(e) => {
          e.stopPropagation();
          openModal(src);
        }}
      />
      <div className="overlay">
        <div id="cardTitleContainer" className="items card-title-container">
          <p id="cardTitle">{title}</p>
          <hr />
        </div>
        <div id="cardDateContainer" className="items card-date-container">
          <p id="cardDate">{artist}</p>
        </div>
      </div>

      {/* Модальне вікно */}
      <Modal
        title={title}
        artist={artist}
        date={date}
        price={price}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {currentImage && (
          <img
            src={currentImage}
            alt="Selected artwork"
            width={width}
            height={height}
            loading="lazy"
          />
        )}
 
      </Modal>
    </div>
  );
}

ArtCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onCardClick: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
