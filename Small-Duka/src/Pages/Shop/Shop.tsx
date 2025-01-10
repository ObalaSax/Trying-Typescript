import "./Shop.css";

import { useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../Features/Slices/DataApiSlice";
import { Col } from "react-bootstrap";
function Shop() {
  const { data: myData, isLoading } = useGetAllProductsQuery();

  //Pagination Manenoz
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [productsPerPage] = useState(10);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  //const onlyProducts = myData.slice(firstProductIndex, lastProductIndex);
  //console.log(onlyProducts);

  //LOADING STATE
  if (isLoading) {
    return (
      <div className="shop-loading">
        <div className="shop-loading-container">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  //The actual Page
  return (
    <div className="shop">
      <div className="shop-container ">
        <h1>Shop</h1>
        <hr />
        <div className="shop-data">
          {myData.products.map((product) => (
            <Col key={product.id} md={4} className="mb-3">
              <ProductCard
                id={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                rating={product.rating}
                discountPercentage={product.discountPercentage}
              />
            </Col>
          ))}
        </div>
      </div>

      <Pagination />
    </div>
  );
}

export default Shop;
