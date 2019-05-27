import React from 'react';
import PropTypes from 'prop-types';

const SwitchButton = props => (
  <button
    className={props.checked}
    onClick={props.onClick}
  >{props.value}
  </button>
);

SwitchButton.propTypes = {
  checked: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SwitchButton;
