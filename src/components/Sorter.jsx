import React from "react";
import PropTypes from 'prop-types';
import { Switcher } from "./Switcher";
import { Founded } from "./Founded";

export function Sorter(props) {
    return (
        <React.Fragment>
            <Founded number={props.number}/>
            <Switcher
                checked={props.sort_by}
                classes={"sort-by"}
                containerClass={"sort-by-block"}
                label={"Sort by"}
                onSwitch={props.onSwitch}
                options={["release date", "rating"]}
            />
        </React.Fragment>
    )
}

Sorter.propTypes = {
    number: PropTypes.number.isRequired,
    onSwitch: PropTypes.func.isRequired,
    sort_by: PropTypes.string.isRequired,
};
