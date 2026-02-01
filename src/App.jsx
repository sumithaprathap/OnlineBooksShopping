import "./App.css";
import Home from "./pages/Home";
import TopSellers from "./pages/TopSellers";
import Categories from "./pages/Categories";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { BookContextProvider } from "./contexts/BookContext";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BookContextProvider>
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-sellers" element={<TopSellers />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </BookContextProvider>
  );
}

export default App;
