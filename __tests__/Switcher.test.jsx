import React from 'react';
import {shallow, mount} from 'enzyme';
import {Switcher} from "../src/components/Switcher";
import {SwitchButton} from "../src/components/SwitchButton";

describe("Switcher component", () => {
    const mockOnSwitch = jest.fn();
    const props = {
        checked: "option1",
        onSwitch: mockOnSwitch,
        options: ['option1', "option2"],
        classes: "search-by"
    };

    it("Switcher component rendered", () => {
        const component = shallow(
            <Switcher {...props}/>
        );
        expect(component.find("SwitchButton")).toHaveLength(props.options.length);
    });

    it("Snapshot", () => {
        const component = shallow(
            <Switcher {...props}/>
        );
        expect(component).toMatchSnapshot();
    });

    it("Check the clickable property ", () => {
        const component = mount(
            <Switcher {...props}/>
        );
        const checkedButton = component.find(".search-by").find(".unchecked");
        checkedButton.simulate("click");
        expect(mockOnSwitch).toHaveBeenCalledTimes(1);
    });
});