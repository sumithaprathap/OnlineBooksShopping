import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { fetchBooks } from "../services/booksApi";

const Categories = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  const categories = [...new Set(books.map((b) => b.category))];

  return (
    <div className="page">
      <h2 className="page-title">Browse by Category</h2>

      {categories.map((cat) => (
        <div key={cat} className="category-section">
          <h3 className="category-title">{cat}</h3>
          <div className="books-section">
            {books
              .filter((b) => b.category === cat)
              .map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
