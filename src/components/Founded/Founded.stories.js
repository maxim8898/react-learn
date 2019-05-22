import React from 'react';
import { storiesOf } from '@storybook/react';
import Founded from './index';

storiesOf('Founded', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('one', () => <Founded number={1} />)
  .add('two', () => <Founded number={2} />);
