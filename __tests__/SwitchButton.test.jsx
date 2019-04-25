import React from 'react';
import {shallow} from 'enzyme';
import {SwitchButton} from "../src/components/SwitchButton";

describe('SwitchButton component', () => {
    const mockOnClick = jest.fn();
    const props = {
        checked: "checked",
        value: "test",
        onClick: mockOnClick
    };

    it('SwitchButton component rendered', () => {
        const component = shallow(
            <SwitchButton {...props}/>
        );
        expect(component.find("button")).toHaveLength(1);
    });

    it('onClick have been called', () => {
        const component = shallow(
            <SwitchButton {...props}/>
        );
        component.find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('Snapshot', () => {
        const component = shallow(
            <SwitchButton {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
});