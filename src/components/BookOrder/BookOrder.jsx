import { useState } from "react";
import { useAppContext } from "../../context/appContext";

import "./BookOrder.css";

const MAX_QUANTITY = 42;
const MIN_QUANTITY = 1;

export function BookOrder({ id, bookPrice }) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useAppContext();

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  function calculateTotalPrice() {
    const orderQuantity = Number(quantity);

    if (orderQuantity < MIN_QUANTITY && quantity) {
      alert("You entered an invalid quantity!");
    } else if (orderQuantity > MAX_QUANTITY) {
      alert("You can`t order more than 42 items!");
      setQuantity(MAX_QUANTITY);
    }

    const totalPriceValue = bookPrice * orderQuantity;

    return formatCurrency.format(totalPriceValue);
  }

  function handleQuantityChange(event) {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
  }

  return (
    <div className="book__order">
      <div className="order__row">
        <span className="row__label">Price:</span>
        <span id="initPrice" className="row__price" style={{ color: "red" }}>
          {bookPrice ? formatCurrency.format(bookPrice) : "$0.00"}
        </span>
      </div>
      <label className="order__row">
        <span className="row__label">Count:</span>
        <input
          id="quantity"
          className="count__quantity"
          type="number"
          min={MIN_QUANTITY}
          max={MAX_QUANTITY}
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <div className="order__row">
        <span className="row__label">Total price:</span>
        <span id="totalPrice" className="row__price" style={{ color: "green" }}>
          {bookPrice ? calculateTotalPrice() : "$0.00"}
        </span>
      </div>
      <div className="order__button">
        <button className="add__button" onClick={() => addToCart({ id, quantity, bookPrice })}>Add to cart</button>
      </div>
    </div>
  );
}
