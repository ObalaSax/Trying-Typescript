import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Logo</h2>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">bbbbbbbbbb</a>
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
          <h3>Cart</h3>
          <p>5</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
