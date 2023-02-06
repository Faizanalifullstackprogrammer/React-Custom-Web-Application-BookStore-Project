import React from 'react';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';
import { categories } from '../actions/actionType';
import '../style/CategoryFilter.css';

function CategoryFilter({ handleFilterChange }) {
  return (
    <div className="nav">
      <div className="nav_logo">
        <span>Bookstore CMS</span>
      </div>
      <div className="nav_middle">
        <p>Books</p>
        <select name="filter" id="filter" onChange={(e) => { handleFilterChange(e.target.value); }}>
          <option value="All">All</option>
          {
          categories.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))
          }
        </select>
      </div>
      <div className="nav_end">
        <PersonIcon />
      </div>
    </div>
  );
}

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
