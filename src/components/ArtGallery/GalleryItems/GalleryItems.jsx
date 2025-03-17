import { useState } from "react";
import ReactPaginate from "react-paginate";
import { artGalleryData } from "../../../data/artGalleryData";
import { ArtCard } from "../ArtCard/ArtCard";
import "./galleryItems.css";


const ITEMS_PER_PAGE = 6;

export function GalleryItems() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = artGalleryData.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(artGalleryData.length / ITEMS_PER_PAGE);

  const handleCardSelect = (selectedCard) => {
    console.log("Selected card:", selectedCard);
  };

  return (
    <div id="galleryContainer" className="gallery-container">
      <ul className="gallery">
        {currentItems.map((item, index) => (
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

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
