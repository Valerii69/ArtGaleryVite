import { Nav } from "../components/Nav/Nav";
import { GalleryItems } from "./ArtGallery/GalleryItems/GalleryItems";

import "../../src/components/ArtGallery/art-gallery.css";

export default function ArtGallery() {
  return (
    <>
      <div id="ArtGallery" className="wide-art-gallery">
        <Nav />
      </div>
      <GalleryItems />
    </>
  );
}
