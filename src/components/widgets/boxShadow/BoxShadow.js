import { useState } from "react";

import RgbSlider from "./RgbSlider";

const BoxShadow = () => {
  const [rightShift, setRightShift] = useState(5);
  const [downShift, setDownShift] = useState(5);
  const [spread, setSpread] = useState(5);
  const [blur, setBlur] = useState(10);
  const [opacity, setOpacity] = useState(100);
  const [inset, setInset] = useState("");
  const [insetCheck, setInsetCheck] = useState(false);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleInset = () => {
    setInsetCheck(!insetCheck);

    if (!insetCheck) {
      setInset("inset");
    } else if (insetCheck) {
      setInset("");
    }
  };

  return (
    <div className="box-shadow-container">
      <div
        style={{
          boxShadow: `${inset} ${rightShift}px ${downShift}px ${blur}px ${spread}px rgb(${red}, ${green}, ${blue}, ${opacity}%)`,
        }}
        className="preview-box-wrapper"
      >
        <h3>preview</h3>
      </div>

      <div className="sliders-wrapper">
        <div className="range-wrapper">
          <label className="left-label">Right Shift: </label>
          <input
            type="range"
            min="-50"
            max="50"
            value={rightShift}
            onChange={(e) => setRightShift(e.target.value)}
          />
          <label className="right-label">{rightShift}</label>
        </div>

        <div className="range-wrapper">
          <label className="left-label">Down Shift: </label>
          <input
            type="range"
            min="-50"
            max="50"
            value={downShift}
            onChange={(e) => setDownShift(e.target.value)}
          />
          <label className="right-label">{downShift}</label>
        </div>

        <div className="range-wrapper">
          <label className="left-label">Spread: </label>
          <input
            type="range"
            min="-30"
            max="50"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
          />
          <label className="right-label">{spread}</label>
        </div>

        <div className="range-wrapper">
          <label className="left-label">Blur: </label>
          <input
            type="range"
            min="0"
            max="50"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <label className="right-label">{blur}</label>
        </div>

        <div className="range-wrapper">
          <label className="left-label">Opacity: </label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(e.target.value)}
          />
          <label className="right-label">{opacity}</label>
        </div>
      </div>

      <div className="inset-rgb-slider-wrapper">
        <div className="inset-wrapper">
          <label>{insetCheck ? "Inset:" : "Outset:"} </label>
          <input type="checkbox" onChange={handleInset} />
        </div>

        <div className="rgb-slider-wrapper">
          <RgbSlider
            red={red}
            setRed={setRed}
            green={green}
            setGreen={setGreen}
            blue={blue}
            setBlue={setBlue}
          />
        </div>
      </div>

      <div className="copy-input">
        {`box-shadow: ${inset} ${rightShift}px ${downShift}px ${blur}px ${spread}px rgb(${red}, ${green}, ${blue}, ${opacity}%)`}
      </div>
    </div>
  );
};

export default BoxShadow;
