import React from 'react';
import {shallow, mount} from 'enzyme';
import {Content} from "../src/components/Content";

describe("Content component", () => {
    const mockdata = require('../src/mockdata.json');
    const props = {
        data: mockdata.data
    };

    it("Content component rendered", () => {
        const component = shallow(
            <Content {...props}/>
        );
        expect(component.find("FilmTile")).toHaveLength(props.data.length);
    });

    it("Snapshot", () => {
        const component = shallow(
            <Content {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
});