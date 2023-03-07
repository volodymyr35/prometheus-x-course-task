import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffectOnce } from "../../hooks";
import { BookOrder } from "../../components/BookOrder";
import imageNotFound from "../../images/imageNotFound.png";

import "./SpecificBook.css";

const { REACT_APP_API_URL = 'http://localhost:4000' } = process.env;

export function SpecificBook() {
  const [currentBook, setCurrentBook] = useState(null);
  const { bookId } = useParams();

  useEffectOnce(() => {
    fetch(`${REACT_APP_API_URL}/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => setCurrentBook(data))
      .catch((error) => console.error(error));
  });

  if (!currentBook) {
    return null;
  }

  return (
    <>
      <div className="book__specification">
        <img
          className="book__image-specification"
          src={currentBook.image || imageNotFound}
          alt="book"
        />
        <ul className="book__info">
          <li>
            <b>Book name:</b>
            {currentBook.title}
          </li>
          <li>
            <b>Book author:</b>
            {currentBook.author}
          </li>
        </ul>
        <BookOrder currentBook={currentBook} />
      </div>
      <p className="book__description-specification">
        <b>Description:</b>
        {currentBook.description}
      </p>
    </>
  );
}
