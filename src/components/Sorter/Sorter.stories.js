import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Founded from '../Founded';
import Switcher from '../Switcher';

const state = {
  checked: 'rating',
  classes: 'sort-by',
  containerClass: 'sort-by-block',
  label: 'Sort by',
  options: ['release date', 'rating'],
};

const actions = {
  onSwitch: action('onSwitch'),
};
storiesOf('Sorter', module)
  .addDecorator(storyFn => (<div style={{
    padding: '0 15%',
    background: '#F5F5F5',
    height: '40px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  }}
  >{storyFn()}</div>))
  .add('default', () => (
    <React.Fragment>
      <Founded number={10} />
      <Switcher
        checked={state.checked}
        classes={state.classes}
        containerClass={state.containerClass}
        options={state.options}
        {...actions}
      />
    </React.Fragment>
  ));
