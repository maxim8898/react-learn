import React from "react";
import PropTypes from 'prop-types';
import Founded from "../Founded/index";
import SortSwitcher from "../../containers/SortSwitcher";

const Sorter = ({number}) => (
  <React.Fragment>
    <Founded number={number}/>
    <SortSwitcher/>
  </React.Fragment>
);

Sorter.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Sorter;
