import { Link } from "react-router-dom";
import imageNotFound from "../../images/imageNotFound.png";
import "./BookItem.css";

export function BookItem(props) {
  const { id, author, price, image, title, shortDescription } = props;

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="book">
      <img className="book__image" src={image || imageNotFound} alt="book" />
      <ul className="book__info">
        <li>
          <b>Book title:</b> {title}
        </li>
        <li>
          <b>Book author:</b> {author}
        </li>
        <li className="book__short-description">
          <b>Book shortDescription:</b> {shortDescription}
        </li>
      </ul>
      <div className="book__info-row">
        <span className="row__label">{formatCurrency.format(price)}</span>
        <Link to={`/books/${id}`}>
          <button className="view__button">View</button>
        </Link>
      </div>
    </div>
  );
}
