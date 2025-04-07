import { useState } from "react";
import { Nav } from "../components/Nav/Nav";
import { GalleryItems } from "./ArtGallery/GalleryItems/GalleryItems";
import { artGalleryData } from "../data/artGalleryData";

import "../../src/components/ArtGallery/art-gallery.css";

export default function ArtGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredGallery = artGalleryData.filter((item) =>
    item.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div id="ArtGallery" className="wide-art-gallery">
        <Nav handleSearch={handleSearch} />
      </div>
      <GalleryItems items={filteredGallery} />
    </>
  );
}
