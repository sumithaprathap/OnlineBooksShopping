import { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookContextProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  // Add to fav
  const addToFavorites = (book) => {
    setFavoriteBooks((prev) => [...prev, book]);
  };
  // remove from fav
  const removeFromFavorites = (book) => {
    setFavoriteBooks((prev) => prev.filter((b) => b.id !== book.id));
  };

  // check isFav
  const isFavorite = (book) => {
    return favoriteBooks.some((b) => b.id === book.id);
  };

  const accessibleData = {
    favoriteBooks,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
  return (
    <BookContext.Provider value={accessibleData}>
      {children}
    </BookContext.Provider>
  );
};
