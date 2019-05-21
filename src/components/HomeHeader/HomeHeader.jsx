import React from 'react';
import PropTypes from 'prop-types';
import SearchBlock from '../SearchBlock';
import Sorter from '../Sorter/Sorter';
import styles from './HomeHeader.css';

const HomeHeader = ({ number }) => (
  <React.Fragment>
    <div className={styles['search-container']}>
      <SearchBlock />
    </div>
    <div className={styles.highlighted}>
      <Sorter number={number} />
    </div>
  </React.Fragment>
);

HomeHeader.propTypes = {
  number: PropTypes.number.isRequired,
};

export default HomeHeader;
