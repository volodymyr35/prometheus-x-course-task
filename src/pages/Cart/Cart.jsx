import cart from "../../images/cart.svg";
import "./Cart.css";

export function Cart() {
  return (
    <div className="cart__container">
      <button>Purchase</button>
      <img src={cart} alt="cart" />
      <span>Cart Empty...</span>
    </div>
  );
}
