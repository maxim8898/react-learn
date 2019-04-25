import React from 'react';
import {shallow, mount} from 'enzyme';
import {SearchBlock} from "../src/components/SearchBlock";

describe("SearchBlock component", () =>{
    const mockOnChangeQuery = jest.fn();
    const mockOnSwitch = jest.fn();
    const props = {
        onChangeQuery: mockOnChangeQuery,
        onSwitch: mockOnSwitch,
        query: "test query",
        search_by: "option"
    };

    it("SearchBlock component rendered", () => {
        const component = shallow(
            <SearchBlock {...props}/>
        );
        expect(component.find(".search-block").find(".search-block-title")).toHaveLength(1);
        expect(component.find(".search-block").find("Connect(SearchInput)")).toHaveLength(1);
        expect(component.find(".search-block").find("Connect(Switcher)")).toHaveLength(1);
    });

    it("Snapshot", () => {
        const component = shallow(
            <SearchBlock {...props}/>
        );
        expect(component).toMatchSnapshot();
    })
});