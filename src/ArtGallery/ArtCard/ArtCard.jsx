import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./artCard.css";


export function ArtCard({ artist, title, price, src, onCardClick, width,height }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <div id="cardContainer" className="card-container card-border" onClick={() => onCardClick({ artist, title, price, src })}>
      <img
        id="cardImage"
        loading="lazy"
        src={src}
        alt={`Artwork ${title} by ${artist}`}
        className="card-image"
        width={width}
        height={height}
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
      {/* <button
        className=""
        aria-label={`View ${title} in modal`}
        onClick={(e) => {
          e.stopPropagation();
          openModal(src);
        }}
      >
        View in Modal
      </button> */}
    </div>
  );
}



export function ArtCardItem({ currentCard, handleClickedCard }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleClickedCard(currentCard);
  };

  return (
    <li onClick={handleClick}>
      <ArtCard currentCard={currentCard} />
    </li>
  );
}

ArtCard.propTypes = {
  currentCard: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

ArtCardItem.propTypes = {
  currentCard: PropTypes.object.isRequired,
  handleClickedCard: PropTypes.func.isRequired,
};
