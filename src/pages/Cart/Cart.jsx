import { useAppContext } from "../../context/appContext";
import cartIcon from "../../images/cart.svg";
import trash from "../../images/trash.png";
import "./Cart.css";

export function Cart() {
  const { cartData, removeFromCart, clearCart } = useAppContext();

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  const cartDataTotal = cartData.reduce(
    (acc, { bookPrice, quantity }) => bookPrice * quantity + acc,
    0
  );

  const purchaseHandler = () => {
    clearCart();

    setTimeout(() => {
      alert("Thank you for your purchase!");
    });
  };

  if (!cartData.length) {
    return (
      <div className="cart__container">
        <button className="purchase__button" disabled>
          Purchase
        </button>
        <img src={cartIcon} alt="cart" />
        <span>Cart Empty...</span>
      </div>
    );
  }

  return (
    <div className="cart__container">
      <button className="purchase__button" onClick={purchaseHandler}>
        Purchase
      </button>
      <table>
        <thead>
          <tr>
            <th>Book name</th>
            <th>Quantity</th>
            <th>Price per book</th>
            <th>Item price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map(({ id, quantity, bookPrice, bookName }) => (
            <tr key={id}>
              <td>{bookName}</td>
              <td>{quantity}</td>
              <td>{formatCurrency.format(bookPrice)}</td>
              <td>{formatCurrency.format(quantity * bookPrice)}</td>
              <td>
                <button
                  className="remove__button"
                  onClick={() => {
                    removeFromCart(id);
                  }}
                >
                  <img src={trash} alt="trash" width="15" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="total__price">
        Total price: {formatCurrency.format(cartDataTotal)}
      </span>
    </div>
  );
}
