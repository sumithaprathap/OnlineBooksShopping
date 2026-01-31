import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="images/bookstore.png" alt="" />
        <p>Online Book Store</p>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/top-sellers" className="nav-link">
          Top Sellers
        </Link>
        <Link to="/categories" className="nav-link">
          Categories
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
