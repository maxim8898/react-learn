import React from 'react';
import {shallow} from 'enzyme';
import {SearchInput} from "../src/components/SearchInput";

describe('SearchInput component', () => {
    const mockOnChange = jest.fn();
    const props = {
        onChangeQuery: mockOnChange,
        placeholder: "test placeholder",
        query: "test query"
    };

    it('SearchInput component rendered', () => {
        const component = shallow(
            <SearchInput {...props}/>
        );
        expect(component.find("input")).toHaveLength(1);
        expect(component.find("button")).toHaveLength(1);
    });

    it('Snapshot', () => {
        const component = shallow(
            <SearchInput {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
    it('onChange can be called', () => {
        const component = shallow(
            <SearchInput {...props}/>
        );
        component.find("[type='search']").simulate('change', {
            currentTarget: {
                value: "newstring"
            }
        });
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
});