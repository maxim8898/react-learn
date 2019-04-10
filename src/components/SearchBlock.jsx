import React from "react";
import PropTypes from 'prop-types';
import { Switcher } from "./Switcher";
import { SearchInput } from "./SearchInput";

export function SearchBlock(props) {
    return (
        <div className="search-block">
            <div className={"search-block-title"}>Find your movie</div>
            <SearchInput
                onChangeQuery={props.onChangeQuery}
                placeholder="Quentin Tarantino"
                query={props.query}/>
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

SearchBlock.propTypes = {
    onChangeQuery: PropTypes.func.isRequired,
    onSwitch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    search_by: PropTypes.string.isRequired,
};
