// Styles
import "./Pagination.css";

const Pagination: React.FC = ({ setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <div className="pagination-container">
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <a href="">{page}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
