import { BookOrder } from '../../components/BookOrder';
import './SpecificBook.css';

export function SpecificBook() {
  return (
    <>
      <div className="book-specification">
        <img
          className="book__image"
          src="../../images/imageNotFound.png"
          alt="book"
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
        <BookOrder />
      </div>
      <p className="book__description">
        <b>Description:</b> A book providing an introduction to the JavaScript
        language and programming in general.
      </p>
    </>
  );
}
