import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { BookPrice } from '../../components/BookPrice';

import './BookList.css';

export function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('../../data/books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <div className="search-filters">
        <SearchBar />
        <BookPrice />
      </div>
      <div className="container grid" id="bookList">
        <h1>Book List</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <a href={`data/books/${book.id}`}>{book.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
