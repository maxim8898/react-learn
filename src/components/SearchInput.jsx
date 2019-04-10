import React from "react";
import PropTypes from 'prop-types';

export function SearchInput(props){
    return (
        <form>
            <input onChange={props.onChangeQuery} placeholder={props.placeholder} type="search" value={props.query}/>
            <input type="submit" value="Search"/>
        </form>
    );
}

SearchInput.propTypes = {
    onChangeQuery: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
};