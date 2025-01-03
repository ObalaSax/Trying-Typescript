import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { useState } from "react";
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  //My Button Function
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <button onClick={handleOpenNav}>{openNav ? "Open" : "Close"}</button>
          <img src={Logo} alt="Logo" />
        </div>
        <hr />
        <div
          className={
            openNav ? "navbar-compressed-open" : "navbar-compressed-closed"
          }
        >
          <div className="navbar-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">Women</a>
              </li>{" "}
              <li>
                <a href="">Men</a>
              </li>{" "}
              <li>
                <a href="">Kids</a>
              </li>
            </ul>
          </div>
          <div className="navbar-signin">
            <a href="">Login</a>
            <p>
              <a href="">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
