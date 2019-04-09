import React from "react";
import PropTypes from 'prop-types';
import { Switcher } from "./Switcher";

export function SearchBlock(props) {
    return (
        <div className="search-block">
            <div className={"search-block-title"}>Find your movie</div>
            <SearchInput placeholder="Quentin Tarantino" query={props.query} onChangeQuery={props.onChangeQuery}/>
            <Switcher
                onSwitch={props.onSwitch}
                label={"Search by"}
                containerClass={"search-by-block"}
                classes={"search-by"}
                checked={props.search_by}
                options={["title", "genre"]}
            />
        </div>
    )
}

function SearchInput(props){
    return (
        <form>
            <input type="search" placeholder={props.placeholder} value={props.query} onChange={props.onChangeQuery}/>
            <input type="submit" value="Search"/>
        </form>
    );
}

SearchBlock.propTypes = {
    onChangeQuery: PropTypes.func.isRequired,
    onSwitch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    search_by: PropTypes.string.isRequired,
};

SearchInput.propTypes = {
    onChangeQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};
