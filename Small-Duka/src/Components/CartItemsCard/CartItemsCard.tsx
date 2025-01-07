import "./CartItemsCard.css";

function CartItemsCard() {
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
            <button>+</button>
            <input type="text" readOnly />
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemsCard;
