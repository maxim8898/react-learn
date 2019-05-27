import React from 'react';
import SearchInputContainer from '../../containers/SearchInputContainer';
import SearchSwitcher from '../../containers/SearchSwitcher';
import Style from './style';

const SearchBlock = () => (
  <Style>
    <div className="search-block-title">Find your movie</div>
    <SearchInputContainer />
    <SearchSwitcher />
  </Style>
);

export default SearchBlock;
