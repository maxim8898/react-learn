import React from "react";
import PropTypes from 'prop-types';

export function Founded(props) {
    return (
        <div className={"founded-movies"}>
            {props.number} movies found
        </div>
    )
}

Founded.propTypes = {
    number: PropTypes.number.isRequired,
};