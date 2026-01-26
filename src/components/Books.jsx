import React from "react";
import { books } from "../data";
import BookCard from "./BookCard";
const Books = ({ booksToDisplay }) => {
  return (
    <section className="books-section">
      {booksToDisplay.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
};

export default Books;
