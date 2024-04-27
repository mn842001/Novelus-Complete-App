//Book.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./BookList.css";
import "./BookButton.css";

const Book = (book) => {
  const { addToFavorites, removeFromFavorites, favoriteBooks } = useGlobalContext();

  // Check if the book is in favorites
  const isFavorite = favoriteBooks.some(favBook => favBook.id === book.id);

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

        {/* Render different button based on whether book is in favorites */}
        {isFavorite ? (
          <button className="btn btn-remove-from-favorites" onClick={() => removeFromFavorites(book.id)}>
            Remove from Favorites
          </button>
        ) : (
          <button className="btn btn-add-to-favorites" onClick={() => addToFavorites(book)}>
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  )
}

export default Book;

