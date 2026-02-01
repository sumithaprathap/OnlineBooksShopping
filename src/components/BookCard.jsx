import { useState } from "react";
import { useBookContext } from "../contexts/BookContext";

const BookCard = ({ book }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useBookContext();
  const favorite = isFavorite(book);
  const onFavoriteClick = function (e) {
    e.preventDefault();
    favorite ? removeFromFavorites(book) : addToFavorites(book);
  };
  return (
    <div className="book-card">
      <div className="book-cover">
        <img className="book-image" src={book.url} alt={book.title} />
        <button
          className="fav-btn"
          onClick={onFavoriteClick}
          aria-label="Add to wishlist"
        >
          <i
            className={favorite ? "fa fa-heart" : "fa fa-thumbs-up"}
            aria-hidden="true"
            style={{ color: "red", fontSize: "15px", marginRight: "4px" }}
          ></i>
        </button>
      </div>
      <h3 className="book-title">{book.title}</h3>

      <div className="review-block">
        <div className="rating">
          {book.rating}
          <i
            className="fa fa-star"
            aria-hidden="true"
            style={{ color: "#f5c518", marginRight: "4px" }}
          />
        </div>
        <p>{book.reviewCount} Reviews</p>
      </div>
      <div className="book-price-block">
        <div className="book-price">₹{book.price}</div>
        <div className="discount">{book.discount} OFF</div>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default BookCard;
