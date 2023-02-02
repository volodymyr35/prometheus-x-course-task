import './Specific-book.css';

export function SpecificBook() {
  return (
    <>
      <div className="book-specification">
        <img
          className="book__image"
          src="../../images/imageNotFound.png"
          alt="book image"
        />
        <ul className="book__info">
          <li>
            <b>Book name:</b> Eloquent Javascript
          </li>
          <li>
            <b>Book author:</b> Marijn Haverbeke
          </li>
          <li>
            <b>Book level:</b> Beginer
          </li>
          <li>
            <b>Book tags:</b> core
          </li>
        </ul>
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
      </div>
      <p className="book__description">
        <b>Description:</b> A book providing an introduction to the JavaScript
        language and programming in general.
      </p>
    </>
  );
}
