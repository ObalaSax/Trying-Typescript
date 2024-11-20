import { BsFillGrid3X3GapFill, BsXLg } from "react-icons/bs";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";

import { useState } from "react";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(true);

  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar);

    {
      /** const navList = document.getElementById("navbar-menu");*/
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
          <button onClick={handleOpenNavbar}>
            {openNavbar ? <BsXLg /> : <BsFillGrid3X3GapFill />}
          </button>
        </div>
        <div className="navbar-links">
          <div
            className={openNavbar ? "navbar-links-open" : "navbar-links-closed"}
          >
            <ul id="navbar-menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
              <li>
                <a href="">Music</a>
              </li>
            </ul>
          </div>
          <div
            className={
              openNavbar
                ? "navbar-authentication-open"
                : "navbar-authentication-closed"
            }
          >
            <button className="btn-login-open">Login</button>
            <button className="btn-signup-closed">Sign-up</button>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Navbar;
