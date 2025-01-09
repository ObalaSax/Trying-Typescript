// Styles
import "./Pagination.css";

function Pagination() {
  //const pages = 1;

  for (let i = 1; i <= 10; i++) {
    //Code
  }
  return (
    <div className="pagination">
      
      <div className="pagination-container">
        <ul>
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">4</a>
          </li>
          <li>
            <a href="">5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
