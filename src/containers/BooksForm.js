import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions/index';
import { categories } from '../actions/actionType';
import '../style/BooksForm.css';

const BooksForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  const id = Math.random();

  const handleChangeTitle = (event) => {
    setTitle(
      event.target.value,
    );
  };

  const handleChangeCategory = (event) => {
    setCategory(
      event.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id,
      title,
      category,
    };
    props.createBookAction(book);
    setTitle('');
    setCategory('Action');
  };

  return (
    <div className="form_section">
      <h3>Add New Book</h3>
      <form className="form">
        <input className="form_input" placeholder="Book title" type="text" name="title" value={title} onChange={handleChangeTitle} />

        <select className="form_select" name="category" id="category" value={category} onChange={handleChangeCategory}>
          {
        categories.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))
        }
        </select>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBookAction: (book) => {
    dispatch(createBookAction(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);

BooksForm.propTypes = {
  createBookAction: PropTypes.func.isRequired,
};
