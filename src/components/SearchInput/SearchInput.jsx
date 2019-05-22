import React from 'react';
import PropTypes from 'prop-types';
import Button from './style';

const SearchInput = props => (
  <React.Fragment>
    <input
      onChange={props.onChangeQuery}
      placeholder={props.placeholder}
      type="search"
      value={props.query}
    />
    <Button onClick={props.onClickSubmit}>
      Search
    </Button>
  </React.Fragment>
);

SearchInput.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchInput;
