import { useState } from 'react';

export function BookItem(props) {
  const [showDescription, setShowDescription] = useState(false);
  
  const {
    id,
    author,
    price,
    image,
    title,
    shortDescription,
    description,
  } = props;

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="book" id={id}>
      <img className="book__image" src={image} alt="book" />
      <ul className="book__info">
        <li><b>Book title:</b> {title}</li>
        <li><b>Book author:</b> {author}</li>
        <li><b>Book shortDescription:</b> {shortDescription}</li>
      </ul>
      <div className="book__info-row">
        <span className="row__label">{formatCurrency.format(price)}</span>
        <button className="view__button" onClick={toggleDescription}>
          {showDescription ? 'Hide' : 'View'}
        </button>
      </div>
      {showDescription && (
        <p className="book__description">
          <b>Description:</b> {description}
        </p>
      )}
    </div>
  );
}
