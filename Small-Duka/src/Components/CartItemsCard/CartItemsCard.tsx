import "./CartItemsCard.css";
import { CartItem } from "../../Features/Slices/cartSlice";
const CartItemsCard: React.FC<CartItem> = ({
  id,
  price,
  thumbnail,
  title,
  cartQuantity,
}) => {
  //Buttons Function
  const handleIncrementItem = () => {
    //Code
  };
  const handleDecrementItem = () => {
    //code
  };
  return (
    <div className="cartcard">
      <div className="cartcard-container">
        <div className="cartitems-img" key={id}>
          <img src={thumbnail} alt={title} />
        </div>
        <hr />
        <div className="cartitems-details">
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
        <hr />
        <div className="cartitems-actions">
          <h3>{price}</h3>
          <div className="cartitems-actions-buttons">
            <button onClick={handleIncrementItem}>+</button>
            <span>{cartQuantity}</span>
            <button onClick={handleDecrementItem}>-</button>
          </div>
        </div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartItemsCard;
