import { useState } from "react";
import { books } from "../data";
const SearchForm = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-wrapper">
      <form className="search-form">
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
