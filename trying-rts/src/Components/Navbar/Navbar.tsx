import "./Navbar.css";

import { useState } from "react";
import Sidenav from "../Sidenav/Sidenav";

function Navbar() {
  const [openSidenav, setOpenSidenav] = useState(true);

  const handleOpenSidenav = () => {
    setOpenSidenav(!openSidenav);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-sidebar-and-logo">
          <button onClick={handleOpenSidenav}>Open</button>
          <img src="" alt="Logo" />
        </div>
        <div className="navbar-links">
          <ul>
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
              <a href="">Noma Sana</a>
            </li>
          </ul>
        </div>
        <div className="navbar-authentication">
          <button>Login</button>
          <button>Sign-up</button>
        </div>
      </div>
      <br />
      <hr />
      <Sidenav />
    </div>
  );
}

export default Navbar;
