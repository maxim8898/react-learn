import React from 'react';
import {shallow, mount} from 'enzyme';
import {FilmBlock} from "../src/components/FilmBlock";

describe("FilmBlock component", () => {
    const mockdata = require('../src/mockdata.json');
    const props = {
        data: mockdata.data[3]
    };
    it("FilmBlock component rendered", () => {
        const component = shallow(
            <FilmBlock {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
});