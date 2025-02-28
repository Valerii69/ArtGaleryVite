// import { useState } from 'react';
// import { HeroModal } from '@/src/app/ui/components/modals/heroModal/HeroModal';
// import Image from 'next/image';
import PropTypes from 'prop-types';

export function ArtCard(props) {

    //   const currentCard = props.currentCard;
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);

//   const openModal = imageSrc => {
//     setCurrentImage(imageSrc); //поточне зображення
//     setIsModalOpen(true); // модалка
//   };

  return (
    <div id="cardContainer"  className="card-container card-border">
      {/* Изображение */}
          <img
        id="cardImage"
        loading="lazy"
        src={props.src}
        alt={`Artwork ${props.title} by ${props.artist}`}
        className="card-image"
        width={270}
        height='auto'
        // onClick={() => openModal(src)}
      />

          {/* інформація про картину  */}
   <div className="overlay">
        <div id="cardTitleContainer" className="items card-title-container">
          <p id="cardTitle">{props.title}</p>
          <hr />
        </div>
        <div id="cardDateContainer" className="items card-date-container">
          <p id="cardDate">{props.artist}</p>
        </div>
      </div>




      {/* <div className="mt-5 text-lg text-neutral-400">{props.artist}</div>
      <div className="mt-2.5 text-3xl">{props.title}</div>
      <div className="mt-2 text-lg">{props.medium}</div>
      <div className="mt-8 text-2xl text-neutral-500">₴ {props.price}</div> */}

      {/* Кнопка відкриття модалки */}
      <button
        className="mt-5 min-h-[65px] gap-1.5 self-stretch border border-solid border-neutral-500 px-16 py-5 text-xl text-neutral-500 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-neutral-500 hover:text-white hover:shadow-lg max-md:px-5"
        aria-label={`View ${props.title} in modal`}
        // onClick={() => openModal(src)}
      >
        View in Modal
      </button>

      {/* Модальное окно */}
      {/* <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {currentImage && (
          <Image
            src={currentImage}
            alt="Selected artwork"
            className="h-auto w-full rounded-lg"
            width={1000}
            height={1000}
            loading="lazy"
          />
        )}
        <button
          onClick={() => setIsModalOpen(false)}
          className="hover:bg-red-600 my-10 rounded-lg bg-red px-4 py-2 text-white"
        >
          Close
        </button>
      </HeroModal> */}
    </div>
  );
}
ArtCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};