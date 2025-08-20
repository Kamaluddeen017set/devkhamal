import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <img
        src="https://res.cloudinary.com/dg1zkgl6n/image/upload/v1754813897/img_3_1733317074951_edxwyr.jpg"
        alt="Profile"
        id="dp"
      />
      <span>Dev~khamal</span>
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

        <i className="fa-solid fa-bars-staggered" id="menu"></i>
      </ul>
    </nav>
  );
}

export default Navbar;
