import React from 'react';
import {shallow} from 'enzyme';
import { Founded } from "../src/components/Founded";

test('should render a label', () => {
    const label = shallow(
        <Founded number={7}/>
    );
    expect(label.text()).toEqual('7 movies found');
});