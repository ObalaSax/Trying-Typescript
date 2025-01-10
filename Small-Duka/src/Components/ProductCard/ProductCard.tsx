import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { addToCart } from "../../Features/Slices/cartSlice";
import React from "react";
import { ProductsData } from "../../Features/Slices/DataApiSlice";

const ProductCard: React.FC<ProductsData> = ({
  id,
  thumbnail,
  price,
  discountPercentage,
  rating,
  title,
}) => {
  const AddToCartDispatch = useDispatch();

  //Button Function
  const handleAddToCart = () => {
    try {
      AddToCartDispatch(
        addToCart({ id, title, thumbnail, price, rating, discountPercentage }),
      );
      alert("Added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="productcard">
      <div className="productcard-container">
        <img src={thumbnail} alt={title} />
        <div className="productcard-details">
          <h2>{title}</h2>
          <hr />
          <h3>${price}</h3>
        </div>
        <div className="productcard-rating">
          <h4>Rating:{rating}</h4>
          <h4>{discountPercentage}%</h4>
        </div>
        <div className="productcard-button">
          <button onClick={handleAddToCart}>+ Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
