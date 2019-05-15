import React from 'react';
import PropTypes from 'prop-types';
import SwitchButton from '../SwitchButton';
import styles from './Switcher.css';

const Switcher = (props) => (
  <div className={styles[props.containerClass]}>
    <div className={styles['label']}>{props.label}</div>
    <div className={styles[props.classes]}>
      {
        props.options.map(function (option, i) {
          const checked = props.checked === option ? "checked" : "unchecked";
          return (
            <SwitchButton
              checked={checked}
              key={i.toString()}
              onClick={(function () {
                props.onSwitch(option)
              }).bind(this)}
              option={option}
              value={option}
            />
          )
        })
      }
    </div>
  </div>
);

Switcher.propTypes = {
  checked: PropTypes.string.isRequired,
  classes: PropTypes.string,
  containerClass: PropTypes.string,
  onSwitch: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
Switcher.defaultProps = {
  classes: '',
  containerClass: '',
};

export default Switcher;
