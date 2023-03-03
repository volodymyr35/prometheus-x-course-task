import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffectOnce } from "../../hooks";
import { useAppContext } from "../../context/appContext";
import { BookOrder } from "../../components/BookOrder";
import imageNotFound from "../../images/imageNotFound.png";
import "./SpecificBook.css";

export function SpecificBook() {
  const [currentBook, setCurrentBook] = useState(null);
  const { books, setBooks } = useAppContext();
  const { bookId } = useParams();

  useEffectOnce(() => {
    fetch(`http://localhost:4000/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        if (
          !books.length ||
          books.findIndex((b) => b.id === Number(bookId)) === -1
        ) {
          setBooks((prevState) => [...prevState, data]);
        }
        
        setCurrentBook(data);
      })
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
        <BookOrder id={currentBook.id} bookPrice={currentBook.price} />
      </div>
      <p className="book__description-specification">
        <b>Description:</b>
        {currentBook.description}
      </p>
    </>
  );
}
