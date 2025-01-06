import "./NotFound.css";
import NoPage from "../../assets/Error.svg";
function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-container">
        <img src={NoPage} alt="Error 404" />
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
        <p>
          Fresh Start? <a href="/">Home</a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
