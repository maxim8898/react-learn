import React from 'react';
import PropTypes from 'prop-types';
import SearchBlock from '../SearchBlock';
import Sorter from '../Sorter/Sorter';
import Style from './style';

const HomeHeader = ({ number }) => (
  <Style>
    <div className="search-container">
      <SearchBlock />
    </div>
    <div className="highlighted">
      <Sorter number={number} />
    </div>
  </Style>
);

HomeHeader.propTypes = {
  number: PropTypes.number.isRequired,
};

export default HomeHeader;
