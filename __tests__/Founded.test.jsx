import React from 'react';
import {shallow} from 'enzyme';
import { Founded } from "../src/components/Founded";

describe('Founded component', () => {
    const props = {
        number: 7
    };

    it('Founded component rendered', () => {
        const label = shallow(
            <Founded {...props}/>
        );
        expect(label.find(".founded-movies")).toHaveLength(1);
    });

    it('Snapshot', () => {
        const label = shallow(
            <Founded {...props}/>
        );
        expect(label).toMatchSnapshot();
    });
});