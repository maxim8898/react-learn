import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.css';

const SearchInput = (props) => (
  <React.Fragment>
    <input
      onChange={props.onChangeQuery}
      placeholder={props.placeholder}
      type='search' value={props.query}
    />
    <button className={styles['search-submit']} onClick={props.onClickSubmit}>
      Search
    </button>
  </React.Fragment>
);

SearchInput.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchInput;
