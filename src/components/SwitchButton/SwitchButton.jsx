import React from 'react';
import PropTypes from 'prop-types';
import styles from './SwitchButton.css';

const SwitchButton = (props) => (
  <button
    className={styles[props.checked]}
    onClick={props.onClick}
  >{props.value}</button>
);

SwitchButton.propTypes = {
  checked: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SwitchButton;
