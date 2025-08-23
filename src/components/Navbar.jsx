import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
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
          <a href="/Gallery">Gallery</a>
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
