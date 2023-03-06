import "./BookPrice.css";

const options = [
  { key: "all", value: "" },
  { key: "0", value: "0 - 15" },
  { key: "15", value: "15 - 30" },
  { key: "30", value: "> 30" },
];

export function BookPrice({ onFilter }) {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    onFilter(value);
  };

  return (
    <div className="book__price">
      <label className="choose-price" htmlFor="choosePrice">
        Choose a price:
      </label>
      <select
        id="choosePrice"
        name="choosePrice"
        onChange={handleSelectChange}
      >
        {options.map(({ key, value }) => (
          <option key={key} value={value}>
            {value === "" ? "All Books" : value}
          </option>
        ))}
      </select>
    </div>
  );
}
