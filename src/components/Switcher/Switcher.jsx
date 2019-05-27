import React from 'react';
import PropTypes from 'prop-types';
import SwitchButton from '../SwitchButton';
import Style from './style';

const Switcher = props => (
  <Style className={props.containerClass}>
    <div className="label">{props.label}</div>
    <div className={props.classes}>
      {
        props.options.map((option, i) => {
          const checked = props.checked === option ? 'checked' : 'unchecked';
          return (
            <SwitchButton
              checked={checked}
              key={i.toString()}
              onClick={(function () {
                props.onSwitch(option);
              })}
              option={option}
              value={option}
            />
          );
        })
      }
    </div>
  </Style>
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
