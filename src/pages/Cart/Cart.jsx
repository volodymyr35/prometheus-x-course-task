import { useAppContext } from "../../context/appContext";
import cartIcon from "../../images/cart.svg";
import imageNotFound from "../../images/imageNotFound.png";
import "./Cart.css";

export function Cart(props) {
  const { id, author, price, image, title } = props;

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  const { cart, addToCart, removeFromCart, clearCart } = useAppContext();
  console.log("Your books", cart);

  return (
    <>
      {cart.length > 0 ? (
        cart.map((currentBook) => (
          <div className="book">
            <img
              className="book__image"
              src={image || imageNotFound}
              alt="book"
            />
            <ul className="book__info">
              <li>
                <b>Book title:</b> {title}
              </li>
              <li>
                <b>Book author:</b> {author}
              </li>
            </ul>
            <div className="book__info-row">
              <span className="row__label">{formatCurrency.format(price)}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="cart__container">
          <button>Purchase</button>
          <img src={cartIcon} alt="cart" />
          <span>Cart Empty...</span>
        </div>
      )}
    </>
  );

  // return (
  // <div className="cart__container">
  //   <button>Purchase</button>
  //   <img src={cart} alt="cart" />
  //   <span>Cart Empty...</span>
  // </div>
  // );
}
