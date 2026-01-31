import { useState, useEffect, useMemo } from "react";
import Books from "../components/Books";
import SearchForm from "../components/SearchForm";
import SideBar from "../components/SideBar";
import { fetchBooks } from "../services/booksApi";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    rating: null,
    price: { min: null, max: null },
  });

  useEffect(() => {
    setLoading(true);
    fetchBooks()
      .then(setBooks)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

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

  const filteredBooks = useMemo(() => {
    return books
      .filter(bySearch)
      .filter(byCategory)
      .filter(byRating)
      .filter(byPrice);
  }, [books, searchQuery, filters]);

  if (loading) return <p>Please wait...</p>;
  if (error) return <p>Error occurred...</p>;
  return (
    <div className="home">
      <aside className="sidebar">
        <SideBar filters={filters} setFilters={setFilters} books={books} />
      </aside>
      <div className="content">
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Books filteredBooks={filteredBooks} />
      </div>
    </div>
  );
};

export default Home;
