import { useState, useEffect } from "react";
import Books from "../components/Books";
import SearchForm from "../components/SearchForm";
import SideBar from "../components/SideBar";
import { books } from "../data";

const Home = () => {
  const [booksToDisplay, setBooksToDisplay] = useState(books);
  useEffect(() => {
    if (booksToDisplay.length === 0) {
      setBooksToDisplay(books);
    }
  }, [booksToDisplay]);

  return (
    <div className="home">
      <aside className="sidebar">
        <SideBar />
      </aside>
      <main className="content">
        <SearchForm setBooksToDisplay={setBooksToDisplay} />
        <Books booksToDisplay={booksToDisplay} />
      </main>
    </div>
  );
};

export default Home;
