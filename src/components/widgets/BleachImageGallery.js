import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { bleachImages } from "../helpers/bleachImageArray";

const BleachImageGallery = () => {
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState(0);

  const handleSelect = (arrow) => {
    if (arrow === "down") {
      if (imageId === images.length - 1) {
        setImageId(0);
      } else {
        setImageId((p) => p + 1);
      }
    } else if (arrow === "up") {
      if (imageId === 0) {
        setImageId(images.length - 1);
      } else {
        setImageId((p) => p - 1);
      }
    }
  };

  useEffect(() => {
    setImages(bleachImages);
  }, []);

  return (
    <div className="image-gallery-container">
      <div className="image-wrapper">
        <img src={images[imageId]} alt="bleach image" />
      </div>

      <div className="btn-wrapper">
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-up"
          onClick={() => handleSelect("up")}
        />

        <div className="image-page">{imageId + 1}</div>

        <FontAwesomeIcon
          icon="fa-solid fa-arrow-down"
          onClick={() => handleSelect("down")}
        />
      </div>
    </div>
  );
};

export default BleachImageGallery;
