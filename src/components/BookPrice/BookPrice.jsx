export function BookPrice() {
  return (
    <div className="book__price">
      <label className="choose-price" htmlFor="bookPrice">
        Choose a price:
      </label>
      <select name="Price" id="choosePrice">
        <option value="">Price</option>
        <option value="All">All Books</option>
        <option value="38.49">38.49</option>
        <option value="36.99">36.99</option>
        <option value="31.99">31.99</option>
        <option value="29.99">29.99</option>
        <option value="29.49">29.49</option>
        <option value="26.49">26.49</option>
      </select>
    </div>
  );
}

// TODO: 
// 1. Change price ranges
// 2. Add filter range logic