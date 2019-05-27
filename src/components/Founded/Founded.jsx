import React from 'react';
import PropTypes from 'prop-types';

const Founded = ({ number }) => (
  <div>
    {number} movies found
  </div>
);

Founded.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Founded;
