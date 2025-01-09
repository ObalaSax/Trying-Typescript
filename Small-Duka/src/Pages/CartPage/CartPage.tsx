import CartItemsCard from "../../Components/CartItemsCard/CartItemsCard";
import "./CartPage.css";
import { useSelector } from "react-redux";
import { myRootState } from "../../Features/myStore";
function CartPage() {
  const cartSelector = useSelector(
    (state: myRootState) => state.cart.cartItems,
  );
  // Check If theres something in the cart if None = Tell User there's nothing
  if (cartSelector.length === 0) {
    return (
      <div className="cartpage-emptyCart">
        <h1>Your Cart Is Empty...</h1>
      </div>
    );
  }
  // Actual Page
  return (
    <div className="cartpage">
      <div className="cartpage-container">
        <div className="cartpage-items">
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
