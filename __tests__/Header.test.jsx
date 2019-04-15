import React from 'react';
import {shallow, mount} from 'enzyme';
import {Header} from "../src/components/Header";

describe("Header component", () => {
    const mockOnChangeQuery = jest.fn();
    const mockOnChangeSearchBy = jest.fn();
    const mockOnChengeSortBy = jest.fn();
    const props = {
        number: 7,
        onChangeQuery: mockOnChangeQuery,
        onChangeSearchBy: mockOnChangeSearchBy,
        onChangeSortBy: mockOnChengeSortBy,
        query: "test query",
        search_by: "option",
        sort_by: "option"
    };

    it("Header component rendered", () => {
        const component = shallow(
            <Header {...props}/>
        );
        expect(component.find(".search-container")).toHaveLength(1);
        expect(component.find(".highlighted")).toHaveLength(1);
    });

    it("Snapshot", () => {
        const component = shallow(
            <Header {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
});