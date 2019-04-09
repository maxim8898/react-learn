import React from "react";
import PropTypes from 'prop-types';
import { Switcher } from "./Switcher";

export function Sorter(props) {
    return (
        <React.Fragment>
            <Founded number={props.number}/>
            <Switcher
                onSwitch={props.onSwitch}
                label={"Sort by"}
                containerClass={"sort-by-block"}
                classes={"sort-by"}
                checked={props.sort_by}
                options={["release date", "rating"]}
            />
        </React.Fragment>
    )
}

function Founded(props) {
    return (
        <div className={"founded-movies"}>
            {props.number} movies found
        </div>
    )
}

Sorter.propTypes = {
    onSwitch: PropTypes.func.isRequired,
    sort_by: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};
