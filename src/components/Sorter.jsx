import React from "react";
import PropTypes from 'prop-types';
import { Founded } from "./Founded";
import SortSwitcher from "../containers/SortSwitcher";

export function Sorter(props) {
  return (
    <React.Fragment>
      <Founded number={props.number} />
      <SortSwitcher />
    </React.Fragment>
  )
}

Sorter.propTypes = {
  number: PropTypes.number.isRequired,
};
