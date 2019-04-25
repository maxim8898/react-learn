import React from 'react';
import {shallow, mount} from 'enzyme';
import {Sorter} from "../src/components/Sorter";

describe("Sorter component", () => {
    const mockOnSwitch = jest.fn();
    const props = {
        number: 7,
        onSwitch: mockOnSwitch,
        sort_by: "rating"
    };

    it("Sorter component rendered", () => {
        const component = shallow(
            <Sorter {...props}/>
        );
        expect(component.find("Founded")).toHaveLength(1);
        expect(component.find("Connect(Switcher)")).toHaveLength(1);
    });

    it("Snapshot", () => {
        const component = shallow(
            <Sorter {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
});