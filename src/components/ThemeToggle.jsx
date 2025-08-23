import "../styles/ThemeToggle.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function ThemeToggle() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <aside className="menu-tooltip">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="toggle">
        <i className="fa-solid fa-paint-roller" alt="theme" id="theme"></i>
      </label>

      <li style={{ "--i": 0 }} className="circle-box">
        <a
          href="#"
          className="anchor"
          alt="theme"
          onClick={() => changeTheme("lobster")}
        >
          <i className="fa-solid fa-house-tsunami lobster_icon "></i>
        </a>
      </li>
      <li style={{ "--i": 1 }} className="circle-box">
        <a
          href="#"
          className="anchor"
          alt="theme"
          onClick={() => changeTheme("light")}
        >
          {" "}
          <i className="fa-solid fa-sun white_icon"></i>
        </a>
      </li>
      <li style={{ "--i": 2 }} className="circle-box">
        <a
          href="#"
          className="anchor"
          alt="theme"
          onClick={() => changeTheme("dark")}
        >
          <i className="fa-solid fa-moon dark_icon"></i>
        </a>
      </li>
      <li style={{ "--i": 3 }} className="circle-box">
        <a href="#" className="anchor"></a>
      </li>
      <li style={{ "--i": 4 }} className="circle-box">
        <a href="#" className="anchor"></a>
      </li>
      <li style={{ "--i": 5 }} className="circle-box">
        <a href="#" className="anchor"></a>
      </li>
      <li style={{ "--i": 6 }} className="circle-box">
        <a href="#" className="anchor"></a>
      </li>
      <li style={{ "--i": 7 }} className="circle-box">
        <a href="#" className="anchor"></a>
      </li>
    </aside>
  );
}

export default ThemeToggle;
