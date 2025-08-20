import "../styles/Slider.css";

function Slider() {
  return (
    <div className="slider">
      <ul>
        <li>
          <a className="line" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/gallary">Gallary</a>
        </li>
        <li>
          <a href="/work">My work</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
