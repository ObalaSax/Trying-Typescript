import Pagination from "../../Components/Pagination/Pagination";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../Features/Slices/DataApiSlice";
import "./Shop.css";

function Shop() {
  const { data: myData, isLoading } = useGetAllProductsQuery();

  //LOADING STATE
  if (isLoading) {
    return (
      <div className="shop-loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  //The actual Page
  return (
    <div className="shop">
      <div className="shop-container">
        <h1>Shop</h1>
        <hr />
        {myData.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
            rating={product.rating}
            discountPercentage={product.discountPercentage}
          />
        ))}
        <Pagination />
      </div>
    </div>
  );
}

export default Shop;
