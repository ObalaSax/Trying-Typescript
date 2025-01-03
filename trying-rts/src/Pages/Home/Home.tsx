//import { useDispatch } from "react-redux";
import "./Home.css";
//import ProductCard from "../../Components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../features/API docs/apiConnect";
//import { addToCart } from "../../features/Slices documents/cartSlice";

function Home() {
  const { data: myProducts, isLoading } = useGetAllProductsQuery();
  console.log(myProducts);

  //Call for the Dispach Function
  //  const myDispatch = useDispatch();

  //Loading
  if (isLoading) {
    return (
      <div className="homeLoading">
        <h1>Loading...</h1>
      </div>
    );
  }

  //Add To cart Button Function

  return (
    <div className="home">
      <div className="home-container">
        <h1>Home</h1>
        <div className="home-products"></div>
      </div>
    </div>
  );
}

export default Home;

/*
  {myProducts.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              discountPercentage={product.discountPercentage}
            />
          ))}

*/
