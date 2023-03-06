import { useState } from "react";
import { debounce } from "../../utilities";
import search from "../../images/search.svg";
import "./SearchBar.css";

export function SearchBar({ data, onFilter }) {
  const [searchValue, setSearchValue] = useState("");

  const filterData = (value) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    onFilter(filteredData);
  };

  const debouncedFilter = debounce(filterData, 300);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    debouncedFilter(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by book name"
        arial-label="search"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button className="search-bar__btn">
        <img src={search} alt="search" />
      </button>
    </div>
  );
}
