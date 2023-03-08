import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchOnce } from "../../hooks";
import { BookOrder } from "../../components/BookOrder";
import imageNotFound from "../../images/imageNotFound.png";

import "./SpecificBook.css";

const { REACT_APP_API_URL = "http://localhost:4000" } = process.env;

export function SpecificBook() {
  const [currentBook, setCurrentBook] = useState(null);
  const { bookId } = useParams();
  const { data, error } = useFetchOnce(`${REACT_APP_API_URL}/books/${bookId}`);

  useEffect(() => {
    if (data) {
      setCurrentBook(data);
    }

    if (error) {
      console.error(error);
    }
  }, [data, error]);

  if (!currentBook) {
    return null;
  }

  return (
    <div data-testid="specific-book">
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
      <p className="book__description-specification" data-testid="book-description">
        <b>Description:</b>
        {currentBook.description}
      </p>
    </div>
  );
}
