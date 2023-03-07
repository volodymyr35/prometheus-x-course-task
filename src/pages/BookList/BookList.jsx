import { useEffect, useState, useMemo } from "react";
import { useEffectOnce } from "../../hooks";
import { SearchBar } from "../../components/SearchBar";
import { BookPrice } from "../../components/BookPrice";
import { BookItem } from "../../components/BookItem";

import "./BookList.css";

const bookPriceKeyToValueMap = {
  "0 - 15": [0, 15],
  "15 - 30": [15, 30],
  "> 30": [30, Number.MAX_SAFE_INTEGER],
};

const { REACT_APP_API_URL = 'http://localhost:4000' } = process.env;

export function BookList() {
  const [books, setBooks] = useState([]);
  const [booksBySearch, setBooksBySearch] = useState([]);
  const [booksByPrice, setBooksByPrice] = useState([]);

  useEffectOnce(() => {
    fetch(`${REACT_APP_API_URL}/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  });

  useEffect(() => {
    setBooksBySearch(books);
    setBooksByPrice(books);
  }, [books]);

  const filteredBooks = useMemo(() => {
    return booksBySearch.filter((book) =>
      booksByPrice.some((b) => b.id === book.id)
    );
  }, [booksBySearch, booksByPrice]);

  const filterByBookPrice = (value) => {
    const priceRange = bookPriceKeyToValueMap[value];

    if (priceRange) {
      const filteredBooks = books.filter(
        ({ price }) => price > priceRange[0] && price < priceRange[1]
      );
      setBooksByPrice(filteredBooks);
    } else {
      setBooksByPrice(books);
    }
  };

  return (
    <>
      <div className="search-filters">
        <SearchBar data={books} onFilter={setBooksBySearch} />
        <BookPrice onFilter={filterByBookPrice} />
      </div>
      <div className="container grid" id="bookList">
        {filteredBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}
