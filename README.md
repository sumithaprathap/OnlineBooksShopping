📚 Online Book Store (React)

A modern single-page application built with React that simulates a real-world online bookstore.
The project demonstrates practical frontend architecture including async data loading, global state management, client-side routing, and multi-criteria filtering.

Live Demo:
https://onlinebookstore-searchandshop.netlify.app/

# Features

Core UI

Product grid with reusable BookCard components

Sticky navigation bar with client-side routing

Responsive layout with sidebar + main content

# Dedicated pages:

Home

Top Sellers

Categories

Favorites

Search & Filters

Search books by title (case-insensitive)

Filter by:

Category (multi-select)

Rating (single-select, “X & above”)

Price range (min / max)

Expand / collapse filter sections (accordion UI)

Empty-state handling when no results match

Favorites (Global State)

Mark / unmark books as favorites

Favorites persist across:

Pages

Filters

Search results

Browser refresh

Dedicated Favorites page showing all saved books

# Data & Async

Books loaded asynchronously using fetch

Deployed-friendly setup using /public/books.json

Loading and error states handled gracefully

export const fetchBooks = async () => {
const res = await fetch("/books.json");
const data = await res.json();
return data.books;
};

This demonstrates:

Async side effects with useEffect

Real network-style behavior

No backend dependency

# Tech Stack

React (Hooks)

React Router

Context API

Fetch API

CSS (Flexbox)

Font Awesome icons

Netlify deployment

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
Favorites.jsx

contexts/
BookContext.jsx

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

This pattern is:

Declarative

Easy to extend

Easy to test

Avoids duplicated state

3. Pure UI State vs Business State

UI state (accordion open/close):
Stored locally inside SideBar

Business state (filters, favorites):
Stored centrally in Home / Context

This separation:

Reduces unnecessary re-renders

Keeps logic predictable

Matches real production architecture

4. Global State with Context API

Favorites are managed using React Context:

createContext
useContext
Provider pattern

Why Context:

Avoids prop drilling

Shared across pages

Single source of truth

5. Persistence with Local Storage

Favorites are synchronized with localStorage:

Hydrated on app load

Persisted on every update

useEffect(() => {
const stored = localStorage.getItem("favorites");
if (stored) setFavoriteBooks(JSON.parse(stored));
}, []);

useEffect(() => {
localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
}, [favoriteBooks]);

Demonstrates:

Real persistence

Side effects

State hydration pattern

6. Controlled Components

All user inputs are controlled:

Search input

Category checkboxes

Rating radio buttons

Price range fields

This ensures:

Predictable state

No uncontrolled DOM state

Easier debugging

7. Performance Awareness

Filtering logic uses pure functions and memoization (useMemo) to avoid unnecessary recomputation.

This shows:

Understanding of re-render behavior

Performance-conscious design

# What This Project Demonstrates

This project is intentionally designed to showcase:

Async data flow

State lifting and propagation

Global state with Context

Derived state vs stored state

Component-driven architecture

Real-world UI patterns
