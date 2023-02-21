export function BookOrder() {
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