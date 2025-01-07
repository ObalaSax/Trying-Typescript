import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shop-container">
        <h1>Shop</h1>
        <hr />
        <ProductCard />
      </div>
    </div>
  );
}

export default Shop;
