import React from 'react';
import SearchInputContainer from '../../containers/SearchInputContainer';
import SearchSwitcher from '../../containers/SearchSwitcher';
import styles from './SearchBlock.css';

const SearchBlock = () => (
  <div className={styles['search-block']}>
    <div className={styles['search-block-title']}>Find your movie</div>
    <SearchInputContainer />
    <SearchSwitcher />
  </div>
);

export default SearchBlock;
