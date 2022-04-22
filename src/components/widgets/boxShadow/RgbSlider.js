const RgbSlider = ({ red, setRed, green, setGreen, blue, setBlue }) => {
  return (
    <div className="rgb-slider-container">
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
        className="rgb-block"
      ></div>

      <div className="rgb-inputs">
        <label>{red}</label>
        <input
          name="red"
          id="red"
          type="range"
          min="0"
          max="255"
          onChange={(e) => setRed(e.target.value)}
          value={red}
        />

        <label>{green}</label>
        <input
          name="green"
          id="green"
          type="range"
          min="0"
          max="255"
          onChange={(e) => setGreen(e.target.value)}
          value={green}
        />

        <label>{blue}</label>
        <input
          name="blue"
          id="blue"
          type="range"
          min="0"
          max="255"
          onChange={(e) => setBlue(e.target.value)}
          value={blue}
        />
      </div>
    </div>
  );
};

export default RgbSlider;
