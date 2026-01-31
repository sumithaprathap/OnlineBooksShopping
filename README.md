📚 Online Book Store (React)

A minimal, responsive online book store built with React.
The application demonstrates modern frontend concepts such as component-driven UI, client-side routing, async data fetching, and multi-criteria filtering.

## Live Demo

(https://onlinebookstore-searchandshop.netlify.app/)

# Features

- Core UI

- Product grid with reusable BookCard components

- Sticky navigation bar with client-side routing

- Responsive layout with sidebar + main content

- Search & Filters

- Search books by title (case-insensitive)

- Filter by:
  - Category (multi-select)

  - Rating (single-select)

  - Price range (min / max)

- Expand / collapse filter sections (accordion behavior)

- Empty-state handling when no results match

# Interactions

- Like / wishlist toggle on each book

- Controlled inputs for search and filters

- Real-time filtering without page reload

# Data & Async

- Books loaded asynchronously using fetch

- Deployed-friendly setup using /public/books.json

L- oading and error states handled

# Tech Stack

- React (Hooks)

- React Router

- Fetch API

- CSS (Flexbox)

- Font Awesome icons

- Netlify deployment

# Project Structure

src/
components/
BookCard.jsx
Books.jsx
NavBar.jsx
SearchForm.jsx
SideBar.jsx
pages/
Home.jsx
TopSellers.jsx
Categories.jsx
services/
booksApi.js
App.jsx
App.css

public/
books.json

# Key Architectural Ideas

1. Single Source of Truth

All business state lives in Home.jsx:

const [books, setBooks] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
const [filters, setFilters] = useState({
categories: [],
rating: null,
price: { min: null, max: null },
});

Child components are fully controlled via props.

2. Functional Filtering Pipeline

Instead of nested conditionals:

books
.filter(bySearch)
.filter(byCategory)
.filter(byRating)
.filter(byPrice)

Each filter is an independent predicate:

const bySearch = (book) => {
if (!searchQuery) return true;
return book.title.toLowerCase().includes(searchQuery.toLowerCase());
};

This pattern scales cleanly as new filters are added.

3. Pure UI State vs Business State

UI state (accordion open/close) lives inside SideBar

Business state (filters) lives in Home

This separation avoids unnecessary re-renders and keeps logic predictable.

4. Async Without Backend

Books are fetched from a static JSON file:

export const fetchBooks = async () => {
const res = await fetch("/books.json");
const data = await res.json();
return data.books;
};

This allows:

Async behavior

Real deployment

No backend complexity

Running Locally
npm install
npm run dev
