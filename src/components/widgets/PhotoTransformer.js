import { useState } from "react";

import BackgroundImg from "../../static/images/colors.jpeg";
import ForegroundImg from "../../static/images/colors-modified.jpeg";

const PhotoTransformer = () => {
  const [sliderVal, setSliderVal] = useState(50);

  const handleSlider = (e) => {
    setSliderVal(e.target.value);
  };

  return (
    <div className="photo-transformer-container">
      <div src={BackgroundImg} className="img background-img"></div>
      <div
        src={ForegroundImg}
        className="img foreground-img"
        style={{ width: `${sliderVal}%` }}
      ></div>

      <input
        id="slider"
        type="range"
        min="0"
        max="100"
        onChange={handleSlider}
        value={sliderVal}
      />
    </div>
  );
};

export default PhotoTransformer;
