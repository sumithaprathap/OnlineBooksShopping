import { books } from "../data";
import { useEffect, useState } from "react";

const SideBar = ({ filters, setFilters }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories([...new Set(books.map((book) => book.category))]);
  }, []);
  return (
    <div className="sidebar-filters ">
      <p>Price</p>
      <p>Rating</p>
      <p>Category</p>
      <div className="category">
        {categories.map((category, id) => {
          return (
            <div key={category}>
              <input
                type="checkbox"
                className="filter-category"
                id={category}
                name={category}
                value={category}
                onChange={(e) => {
                  const { checked } = e.target;
                  setFilters((prev) => {
                    return {
                      ...prev,
                      categories: checked
                        ? [...prev.categories, category]
                        : prev.categories.filter((c) => c !== category),
                    };
                  });
                }}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </div>
      <p>Author</p>
    </div>
  );
};

export default SideBar;
