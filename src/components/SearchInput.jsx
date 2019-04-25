import React from "react";
import PropTypes from 'prop-types';

export function SearchInput(props){
    return (
        <React.Fragment>
            <input
                onChange={props.onChangeQuery}
                placeholder={props.placeholder}
                type="search" value={props.query}
            />
            <button className={"search-submit"} onClick={props.onClickSubmit}>Search</button>
        </React.Fragment>
    );
}

SearchInput.propTypes = {
    onChangeQuery: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
};