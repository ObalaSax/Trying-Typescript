import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="productcard">
      <div className="productcard-container">
        <img src="" alt="Product Image" />
        <div className="productcard-details">
          <h2>Product Title</h2>
          <hr />
          <h3>Product Price</h3>
        </div>
        <div className="productcard-rating">
          <h4>Product Rating</h4>
          <h4>Discount</h4>
        </div>
        <button>+ Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
