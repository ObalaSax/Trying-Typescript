import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { useState } from "react";
function Navbar() {
  const [toogleNavbar, setToggleNavbar] = useState(true);
  const handleNavBar = () => {
    setToggleNavbar(!toogleNavbar);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <button onClick={handleNavBar}>
            {toogleNavbar ? "Open" : "Close"}
          </button>
          <img src={Logo} alt="LogoIpsam" />
        </div>
        <div
          className={toogleNavbar ? "navbar-links-open" : "navbar-links-close"}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="">ccccccccccc</a>
            </li>
            <li>
              <a href="">ddddddddd</a>
            </li>
            <li>
              <a href="">eeeeeeeee</a>
            </li>
            <li>
              <a href="/not-found">Not Found</a>
            </li>
          </ul>
        </div>
        <div className="navbar-useractions">
          <ul>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Signup</a>
            </li>
          </ul>
        </div>
        <div className="navbar-cart">
          <a href="/cart">
            <h3>Cart</h3>
            <p>5</p>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
