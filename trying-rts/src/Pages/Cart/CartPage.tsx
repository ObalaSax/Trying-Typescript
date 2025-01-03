import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../features/Slices documents/cartSlice";
import { RootState } from "../../features/store";

function CartPage() {
  //My Selector and Dispatch
  const cartItems = useSelector((state: RootState) => state);
  const myDispatch = useDispatch();

  //Button function
  const handleRemoveCartItem = (id: number) => {
    myDispatch(removeCartItem(id));
    alert("Remove Done");
  };

  return (
    <div className="cart">
      <div className="cart-container">
        <h1>Cart</h1>
      </div>
    </div>
  );
}

export default CartPage;
