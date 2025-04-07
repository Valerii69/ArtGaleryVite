import PropTypes from "prop-types";
// import Mark from "../public/icons/x-mark-3-32.svg";
import Mark from "../../public/icons/x-mark-3-32.svg";
import "./modal.css";

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  artist,
  date,
  price,
  tags,
}) {


  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <div className="zoom-container" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="modal-close">
            <img
              src={Mark}
              alt="Mark Icon"
              width="24"
              height="24"
              className="bar-icon"
            />
          </button>
          <div className="image-container">
            <div className="image-wrapper">{children}</div>
          </div>
          <div id="detailsContainer" className="details-container">
            <p id="title" className="title">
              {title}
            </p>
            <hr />
            <p id="artist" className="artist">
              {artist}
            </p>
            <p id="date" className="date">
              – {date}
            </p>
            <p id="date" className="date">
              – $ {price}
            </p>
            <ul className="date-tags">Tags: {tags}</ul>
            <div className="likes-container">
              {/* <Like card={card} />
            <Dislike card={card} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
