import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookOrder } from '../../components/BookOrder';
import  imageNotFound  from '../../images/imageNotFound.png';
import './SpecificBook.css';

export function SpecificBook() {
  const [currentBook, setCurrentBook] = useState(null);
  const { bookId } = useParams();

  // TODO: 
  // 1. create state for storing current book data
  // 2. fetch specific-book data using bookId
  // 3. pass book data as props to children components

  useEffect(() => {
    fetch(`http://localhost:4000/books/${bookId}`)
    .then(response => response.json())
    .then(data => setCurrentBook(data))
    .catch(error => console.error(error));
  }, []);

  if (!currentBook) {
    return null;
  }

  return (
    <>
      <div className="book-specification">
        <img
          className="book__image"
          src={currentBook.image || imageNotFound}
          alt="book"
        />
        <ul className="book__info">
          <li>
            <b>Book name:</b>{currentBook.title}
          </li>
          <li>
            <b>Book author:</b>{currentBook.author}
          </li>
          <li>
            <b>Book level:</b> Beginer
          </li>
          <li>
            <b>Book tags:</b> core
          </li>
        </ul>
        <BookOrder bookPrice={currentBook.price} />
      </div>
      <p className="book__description">
        <b>Description:</b>{currentBook.description}
      </p>
    </>
  );
}
