import { useState, useEffect } from "react";
import Books from "../components/Books";
import SearchForm from "../components/SearchForm";
import SideBar from "../components/SideBar";
import { books } from "../data";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    rating: null,
    price: { min: null, max: null },
  });
  const bySearch = (book) => {
    if (!searchQuery) return true;
    else
      return book.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
  };

  const byCategory = (book) => {
    if (filters.categories.length === 0) return true;
    else return filters.categories.includes(book.category);
  };

  const byRating = (book) => {
    if (!filters.rating) return true;
    else return book.rating >= filters.rating;
  };

  const byPrice = (book) => {
    const { min, max } = filters.price;

    if (min !== null && book.price < min) return false;
    if (max !== null && book.price > max) return false;
    return true;
  };

  return (
    <div className="home">
      <aside className="sidebar">
        <SideBar filters={filters} setFilters={setFilters} />
      </aside>
      <div className="content">
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Books
          filteredBooks={books
            .filter(bySearch)
            .filter(byCategory)
            .filter(byRating)
            .filter(byPrice)}
        />
      </div>
    </div>
  );
};

export default Home;
