import "./App.css";
import Home from "./pages/Home";
import TopSellers from "./pages/TopSellers";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-sellers" element={<TopSellers />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
