import React from "react";
import { books } from "../data";
import BookCard from "./BookCard";
const Books = ({ filteredBooks }) => {
  // console.log("filteredBooks=", filteredBooks);
  return (
    <section className="books-section">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
};

export default Books;
