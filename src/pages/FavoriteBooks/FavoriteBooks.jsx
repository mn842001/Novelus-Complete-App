import React from 'react';
import { useGlobalContext } from '../../context.';
import "./FavoriteBooks.css";

const FavoriteBooks = () => {
  const { favoriteBooks, removeFromFavorites } = useGlobalContext();

  return (
    <section className='favorite-books'>
      <div className='container'>
        <h2>Your Favorite Books</h2>
        <div className='favorite-books-list'>
          {favoriteBooks.length === 0 ? (
            <p>No favorite books added yet.</p>
          ) : (
            <ul>
              {favoriteBooks.map(book => (
                <li key={book.id} className='favorite-book-item'>
                  <img src={book.cover_img} alt="cover" className='book-cover' />
                  <div className='book-details'>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author.join(", ")}</p>
                    <p>Editions: {book.edition_count}</p>
                    <p>First Publish Year: {book.first_publish_year}</p>
                    <button
                      className='remove-btn'
                      onClick={() => removeFromFavorites(book.id)}
                    >
                      Remove from Favorites
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default FavoriteBooks;
