import "./CartItemsCard.css";

function CartItemsCard() {
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
        <div className="cartitems-img">
          <img src="" alt="Cart Image" />
        </div>
        <hr />
        <div className="cartitems-details">
          <h2>Product Title</h2>
          <h3>Product Price</h3>
        </div>
        <hr />
        <div className="cartitems-actions">
          <h3> Item Price</h3>
          <div className="cartitems-actions-buttons">
            <button onClick={handleIncrementItem}>+</button>
            <span>Item Quantity</span>
            <button onClick={handleDecrementItem}>-</button>
          </div>
        </div>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default CartItemsCard;
