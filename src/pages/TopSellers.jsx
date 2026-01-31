import { useEffect, useState, useMemo } from "react";
import BookCard from "../components/BookCard";
import { fetchBooks } from "../services/booksApi";

const TopSellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  const topSellers = useMemo(() => {
    return [...books]
      .sort(
        (a, b) =>
          Number(b.reviewCount.replace(/,/g, "")) -
          Number(a.reviewCount.replace(/,/g, "")),
      )
      .slice(0, 8);
  }, [books]);

  return (
    <div className="page">
      <h2 className="page-title">Top Selling Books</h2>
      <div className="books-section">
        {topSellers.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
