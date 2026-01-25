import { useState } from "react";

const BookCard = ({ book }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likeBook = function (e) {
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="book-card">
      <div className="book-cover">
        <img className="book-image" src={book.url} alt={book.title} />
        <button
          className="fav-btn"
          onClick={likeBook}
          aria-label="Add to wishlist"
        >
          <i
            className={isLiked ? "fa fa-heart" : "fa fa-thumbs-up"}
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
