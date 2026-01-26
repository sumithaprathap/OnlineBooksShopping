import { useState } from "react";
import { books } from "../data";
const SearchForm = ({ setBooksToDisplay }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchBook = (e) => {
    e.preventDefault();

    const query = searchQuery.toLowerCase().trim();

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query),
    );

    setBooksToDisplay(filteredBooks);
  };
  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={searchBook}>
        <input
          className="search-input"
          type="text"
          placeholder="Enter book name.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
