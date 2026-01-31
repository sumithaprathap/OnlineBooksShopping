// import axios from "axios";
// export const fetchBooks = async () => {
//     const res = await axios.get("http://localhost:4000/books");
//   return res.data;
// };

export const fetchBooks = async () => {
  const res = await fetch("/books.json");
  const data = await res.json();
  return data.books;
};
