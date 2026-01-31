import BookCard from "./BookCard";
const Books = ({ filteredBooks }) => {
  // console.log("filteredBooks=", filteredBooks);
  return (
    <section className="books-section">
      {filteredBooks.length === 0 ? (
        <p>There are currently no books matching your filter criteria/search</p>
      ) : (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </section>
  );
};

export default Books;
