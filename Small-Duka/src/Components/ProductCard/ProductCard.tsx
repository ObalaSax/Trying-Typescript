import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.css";
import { addToCart } from "../../Features/Slices/cartSlice";
import { AppDispatch } from "../../Features/myStore";

interface ProductsDataProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  rating: number;
}

function ProductCard(props: ProductsDataProps) {
  const AddToCartDispatch = useDispatch<AppDispatch>();

  //Add To Cart Function
  const handleAddToCart = () => {
    AddToCartDispatch(addToCart());
  };
  return (
    <div className="productcard">
      <div className="productcard-container">
        <img src={props.thumbnail} alt={props.title} />
        <div className="productcard-details">
          <h2>{props.title}</h2>
          <hr />
          <h3>{props.price}</h3>
        </div>
        <div className="productcard-rating">
          <h4>{props.rating}</h4>
          <h4>{props.discountPercentage}</h4>
        </div>
        <button onClick={handleAddToCart}>+ Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
