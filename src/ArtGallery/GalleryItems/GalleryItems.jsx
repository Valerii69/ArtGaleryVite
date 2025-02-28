
import { ArtCard } from '../ArtCard/ArtCard'
import { artGalleryData } from '../../data/artGalleryData';
import "./galleryItems.css"

export function GalleryItems() {
  return (
    <div id="galleryContainer" className="gallery-container">
      <ul id="gallery" className="gallery">
        {artGalleryData.map((item, index) => (
          <li key={index} className="gallery-item">
            <ArtCard
              artist={item.artist}
              title={item.title}
              size={item.size}
              price={item.price}
              src={item.src}
              width={item.width}
              height={item.height}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
