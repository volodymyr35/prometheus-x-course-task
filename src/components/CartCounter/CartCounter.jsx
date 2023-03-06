import { useAppContext } from "../../context/appContext";

import "./CartCounter.css";

export const CartCounter = ({ children }) => {
  const { cartData } = useAppContext();
  const cartItemsCount = cartData.reduce((acc, { quantity }) => acc + quantity, 0);

  if (!cartData.length) {
    return children;
  }

  return (
    <div className="cart-counter">
      <span className="cart-counter__count">{cartItemsCount}</span>
      {children}
    </div>
  );
}
