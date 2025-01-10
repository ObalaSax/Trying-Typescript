import CartItemsCard from "../../Components/CartItemsCard/CartItemsCard";
import "./CartPage.css";
import { useSelector } from "react-redux";
import { myRootState } from "../../Features/myStore";
import EmptyShoppingCart from "../../assets/EmptyShopping.svg";
function CartPage() {
  const cartSelector = useSelector(
    (state: myRootState) => state.cart.cartItems,
  );

  //Price Calculations
  // Calculate subtotal and total price (assuming prices are numbers)
  const subtotalPrice = cartSelector.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0,
  );
  const totalItemPrice = subtotalPrice;

  console.log(cartSelector);
  // Check If theres something in the cart if None = Tell User there's nothing
  if (cartSelector.length === 0) {
    return (
      <div className="cartpage-emptyCart">
        <div className="cartpage-emptyCart-container">
          <img src={EmptyShoppingCart} alt="No Cart" />
          <h1>Your Cart Is Empty...</h1>
          <div className="cartpage-emptyCart-details">
            <h4>Start Shopping</h4>
            <a href="/shop">Shop</a>
          </div>
        </div>
      </div>
    );
  }
  // Actual Page
  return (
    <div className="cartpage">
      <div className="cartpage-container">
        <div className="cartpage-items">
          {cartSelector.map((cartItem) => (
            <CartItemsCard key={cartItem.id} />
          ))}
        </div>
        <div className="cartpage-summary">
          <h1>Cart Summary</h1>
          <hr />
          <div className="cart-summary-details">
            <h1>Sub Total</h1>
            <h4>{subtotalPrice}</h4>
            <hr />
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
