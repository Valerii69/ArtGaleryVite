import { artGalleryData } from "../../../data/artGalleryData";
import { ArtCard } from "../ArtCard/ArtCard";
import "./galleryItems.css";

console.log(artGalleryData);

export function GalleryItems() {
  const handleCardSelect = (selectedCard) => {
    console.log("Selected card:", selectedCard);
  };

  return (
    <div id="galleryContainer" className="gallery-container">
      <ul className="gallery">
        {artGalleryData.map((item, index) => (
          <li key={index} className="gallery-item">
            <ArtCard
              artist={item.artist}
              title={item.title}
              size={item.size}
              price={item.price}
              src={item.src}
              onCardClick={handleCardSelect}
              width={item.width}
              height={item.height}
              date={item.date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
