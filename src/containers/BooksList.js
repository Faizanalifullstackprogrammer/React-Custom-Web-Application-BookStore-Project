import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBookAction, filterBookAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../style/Book.css';

const BooksList = ({
  booksList, removeBookAction, filterBookAction,
}) => {
  const handleRemoveBook = (book) => {
    removeBookAction(book);
  };

  const handleFilterChange = (filter) => {
    filterBookAction(filter);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="book_details">
        {booksList && booksList.length
          ? booksList.map((item) => (
            <Book
              key={item.id}
              book={item}
              handleRemoveBook={handleRemoveBook}
            />
          ))
          : (<div className="noBook_error">No Books! </div>)}
      </div>
    </>
  );
};

const filterBooksByCategory = (state) => {
  const { booksList, filter } = state;
  if (filter !== 'All') {
    return booksList.filter((book) => (book.category === filter));
  }
  return booksList;
};

const mapStateToProps = (state) => ({ booksList: filterBooksByCategory(state) });

const mapDispatchToProps = (dispatch) => (
  {
    removeBookAction: (book) => {
      dispatch(removeBookAction(book));
    },
    filterBookAction: (filter) => {
      dispatch(filterBookAction(filter));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBookAction: PropTypes.func.isRequired,
  filterBookAction: PropTypes.func.isRequired,
};
