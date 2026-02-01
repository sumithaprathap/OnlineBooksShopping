import { useBookContext } from "../contexts/BookContext";
import BookCard from "../components/BookCard";

const Favorites = () => {
  const { favoriteBooks } = useBookContext();

  if (favoriteBooks.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Mark some books to see them here ❤️</p>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h2 className="favorites-title">My Favorites</h2>
      <div className="favorites-grid">
        {favoriteBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
