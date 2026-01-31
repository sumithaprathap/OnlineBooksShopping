import { useState, useEffect } from "react";
import Books from "../components/Books";
import SearchForm from "../components/SearchForm";
import SideBar from "../components/SideBar";
import { books } from "../data";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const initialFilters = {
    categories: [],
    rating: null,
    price: { min: null, max: null },
  };
  const [filters, setFilters] = useState(initialFilters);
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

  return (
    <div className="home">
      <aside className="sidebar">
        <SideBar filters={filters} setFilters={setFilters} />
      </aside>
      <div className="content">
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Books filteredBooks={books.filter(bySearch).filter(byCategory)} />
      </div>
    </div>
  );
};

export default Home;
