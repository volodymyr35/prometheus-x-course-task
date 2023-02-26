import { useState } from "react";
import { useEffectOnce } from "../../hooks";
import { SearchBar } from "../../components/SearchBar";
import { BookPrice } from "../../components/BookPrice";
import { BookItem } from "../../components/BookItem";

import "./BookList.css";

export function BookList() {
  const [books, setBooks] = useState([]);

  useEffectOnce(() => {
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  });

  return (
    <>
      <div className="search-filters">
        <SearchBar />
        <BookPrice />
      </div>
      <div className="container grid" id="bookList">
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}
