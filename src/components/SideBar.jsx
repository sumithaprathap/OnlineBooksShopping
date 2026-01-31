import { books } from "../data";
import { useEffect, useState } from "react";

const SideBar = ({ filters, setFilters }) => {
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [openSections, setOpenSections] = useState({
    category: false,
    price: false,
    rating: false,
  });

  useEffect(() => {
    setCategories([...new Set(books.map((book) => book.category))]);
  }, []);

  const toggle = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="sidebar-filters ">
      <div className="category-filter">
        <button className="category-btn" onClick={() => toggle("category")}>
          <i
            className={openSections.category ? "fa fa-minus" : "fa fa-plus"}
            aria-hidden="true"
          >
            <span className="filter-name">Category</span>
          </i>
        </button>
        {openSections.category &&
          categories.map((category, id) => {
            return (
              <div className="category-option" key={category}>
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
                <label className="filter-option-name" htmlFor={category}>
                  {category}
                </label>
              </div>
            );
          })}
      </div>
      <div className="price-filter">
        <button className="category-btn" onClick={() => toggle("price")}>
          <i
            className={openSections.price ? "fa fa-minus" : "fa fa-plus"}
            aria-hidden="true"
          >
            <span className="filter-name">Price</span>
          </i>
        </button>
        {openSections.price && (
          <div className="sec-price">
            <span className="filter-option-name">Enter Price Range </span>
            <div className="price-group">
              <input
                type="number"
                className="min-max"
                placeholder="Min"
                value={filters.price.min ?? ""}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    price: {
                      ...prev.price,
                      min: e.target.value ? Number(e.target.value) : null,
                    },
                  }))
                }
              />{" "}
              -{" "}
              <input
                type="number"
                className="min-max"
                placeholder="Max"
                value={filters.price.max ?? ""}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    price: {
                      ...prev.price,
                      max: e.target.value ? Number(e.target.value) : null,
                    },
                  }))
                }
              />
            </div>
          </div>
        )}
      </div>
      <div className="rating-filter">
        <button className="category-btn" onClick={() => toggle("rating")}>
          <i
            className={openSections.rating ? "fa fa-minus" : "fa fa-plus"}
            aria-hidden="true"
          >
            <span className="filter-name">Rating</span>
          </i>
        </button>
        <div className="sec-rating">
          {openSections.rating &&
            [5, 4, 3, 2, 1].map((r) => {
              return (
                <label key={r} className="filter-option-name">
                  <input
                    type="radio"
                    name="rating-radio"
                    value={r}
                    checked={filters.rating === r}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        rating: Number(e.target.value),
                      }))
                    }
                  />
                  <span className="filter-option-name">{r}</span>
                  <i
                    className="fa fa-star"
                    aria-hidden="true"
                    style={{ color: "#f5c518", marginRight: "4px" }}
                  />
                  <span className="filter-option-name">& above</span>
                </label>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
