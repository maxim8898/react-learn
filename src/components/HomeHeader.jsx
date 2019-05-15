import React from "react";
import PropTypes from 'prop-types';
import { SearchBlock } from "./SearchBlock";
import { Sorter } from "./Sorter";

export function HomeHeader(props) {
  return (
    <React.Fragment>
      <div className={"search-container"}>
        <SearchBlock />
      </div>
      <div className={"highlighted"}>
        <Sorter number={props.number} />
      </div>
    </React.Fragment>
  )
}

HomeHeader.propTypes = {
  number: PropTypes.number.isRequired,
};
