import React from "react";
import { books } from "../data";
import BookCard from "./BookCard";
const Books = () => {
  return (
    <section className="books-section">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </section>
  );
};

export default Books;
