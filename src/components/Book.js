import React from 'react';
import PropTypes from 'prop-types';
import '../style/Book.css';

function Book({ book, handleRemoveBook }) {
  const {
    title,
    category,
  } = book;

  return (
    <div className="div_books">
      <div className="book_left">
        <div className="book_left-top">
          <span className="book_left-category">{category}</span>
          <p className="book_left-title">{title}</p>
          <span className="book_left-author">Author</span>
        </div>
        <div className="book_left-bottom">
          <p>Comment</p>
          <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="book_middle">
        <div className="oval-2" />
        <div className="book_middle-text">
          <h4>80%</h4>
          <span>Completed</span>
        </div>
      </div>
      <div className="book_right">
        <span>Current Chapter</span>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
