import search from '../../images/search.svg';

export function SearchBar() {
    return (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by book name"
            arial-label="search"
          />
          <button className="search-bar__btn">
            <img src={search} alt="search" />
          </button>
        </div>
    );
}