import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switcher from './Switcher';

const state = {
  checked: 'title',
  classes: 'search-by',
  containerClass: 'search-by-block',
  label: 'Search By',
  options: ['title', 'genre'],
};

const actions = {
  onSwitch: action('onSwitch'),
};

storiesOf('Switcher', module)
  .add('default', () => (<Switcher
    checked={state.checked}
    classes={state.classes}
    containerClass={state.containerClass}
    options={state.options}
    {...actions}
  />));
