import './BookOrder.css';

export function BookOrder() {
  const initPriceElement = document.getElementById('initPrice');
  const quantityElement = document.getElementById('quantity');
  const totalPriceElement = document.getElementById('totalPrice');

  const BOOK_PRICE = 52.72;
  const MAX_QUANTITY = 42;
  const MIN_QUANTITY = 1;

  initPriceElement.textContent = `$${BOOK_PRICE}`;
  initPriceElement.style.color = 'red';

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });

  function calculateTotalPrice() {
    const orderQuantity = Number(quantityElement.value);

    if (orderQuantity < MIN_QUANTITY && quantityElement.value) {
      alert('You entered invalid quantity!');
    } else if (orderQuantity > MAX_QUANTITY) {
      alert('You can`t order more than 42 items!');
      quantityElement.value = MAX_QUANTITY;
    }

    const totalPriceValue = BOOK_PRICE * orderQuantity;

    totalPriceElement.textContent = formatCurrency.format(totalPriceValue);
    totalPriceElement.style.color = 'green';
  }

  quantityElement.addEventListener('input', calculateTotalPrice);

  calculateTotalPrice();

  return (
    <div className="book__order">
      <div className="order__row">
        <span className="row__label">Price:</span>
        <span id="initPrice" className="row__price">
          $0.00
        </span>
      </div>
      <label className="order__row">
        <span className="row__label">Count:</span>
        <input
          id="quantity"
          className="count__quantity"
          type="number"
          min="1"
          max="42"
          value="1"
        />
      </label>
      <div className="order__row">
        <span className="row__label">Total price:</span>
        <span id="totalPrice" className="row__price">
          $0.00
        </span>
      </div>
      <div className="order__button">
        <button className="add__button">Add to cart</button>
      </div>
    </div>
  );
}
