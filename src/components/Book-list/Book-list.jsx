import './Book-list.css';

export function BookList() {
  return (
    <>
      <div className="search-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by book name"
            arial-label="search"
          />
          <button className="search-bar__btn">
            <img src="../../images/search.svg" alt="search" />
          </button>
        </div>
        <div className="book__price">
          <label className="choose-price" for="bookPrice">
            Choose a price:
          </label>
          <select name="Price" id="choosePrice">
            <option value="">Price</option>
            <option value="41.89">41.89</option>
            <option value="38.49">38.49</option>
            <option value="36.99">36.99</option>
            <option value="31.99">31.99</option>
            <option value="29.99">29.99</option>
            <option value="29.49">29.49</option>
            <option value="26.49">26.49</option>
          </select>
        </div>
      </div>
      <div className="container grid" id="bookList"></div>
    </>
  );
}
