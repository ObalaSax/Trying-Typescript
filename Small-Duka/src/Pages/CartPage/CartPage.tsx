import CartItemsCard from "../../Components/CartItemsCard/CartItemsCard";
import "./CartPage.css";

function CartPage() {
  return (
    <div className="cartpage">
      <div className="cartpage-container">
        <div className="cartpage-items">
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
          <CartItemsCard />
        </div>
        <div className="cartpage-summary">
          <h1>Cart Summary</h1>
          <hr />
          <div className="cart-summary-details">
            <h1>Sub Total</h1>
            <h4>Total Price</h4>
            <hr />
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
