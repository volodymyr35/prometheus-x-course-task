import { useState } from "react";
import { useAppContext } from "../../context/appContext";

import "./BookOrder.css";

const MAX_QUANTITY = 42;
const MIN_QUANTITY = 1;

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export function calculateTotalPrice(quantity, bookPrice) {
  if (quantity < MIN_QUANTITY) {
    alert("You entered an invalid quantity!");
    return formatCurrency.format(bookPrice * MIN_QUANTITY);
  } else if (quantity > MAX_QUANTITY) {
    alert("You can`t order more than 42 items!");
    return formatCurrency.format(bookPrice * MAX_QUANTITY);
  }

  return formatCurrency.format(bookPrice * quantity);
}

export function BookOrder({ currentBook }) {
  const { id, price: bookPrice = 0, title: bookName } = currentBook;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useAppContext();

  function handleQuantityChange(event) {
    const newQuantity = Number(event.target.value);

    if (newQuantity > MAX_QUANTITY) {
      setQuantity(MAX_QUANTITY);
      return;
    }

    if (newQuantity < MIN_QUANTITY) {
      setQuantity(MIN_QUANTITY);
      return;
    }

    setQuantity(Number(event.target.value));
  }

  function handleAddToCart() {
    addToCart({ id, quantity, bookPrice, bookName });
    setQuantity(1);
  }

  return (
    <div className="book__order" data-testid="book-order">
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
        <span
          id="totalPrice"
          className="row__price"
          style={{ color: "green" }}
          data-testid="total-price"
        >
          {bookPrice ? calculateTotalPrice(quantity, bookPrice) : "$0.00"}
        </span>
      </div>
      <div className="order__button">
        <button
          className="add__button"
          onClick={handleAddToCart}
          data-testid="add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
