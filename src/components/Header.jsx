import React from "react";
import PropTypes from 'prop-types';
import { SearchBlock } from "./SearchBlock";
import { Sorter } from "./Sorter";

export function Header(props) {
    return (
        <React.Fragment>
            <div className={"search-container"}>
                <SearchBlock
                    onChangeQuery={props.onChangeQuery}
                    onSwitch={props.onChangeSearchBy}
                    query={props.query}
                    search_by={props.search_by}
                />
            </div>
            <div className={"highlighted"}>
                <Sorter
                    onSwitch={props.onChangeSortBy}
                    sort_by={props.sort_by}
                    number={props.number}
                />
            </div>
        </React.Fragment>
    )
}

Header.propTypes = {
    onChangeQuery: PropTypes.func.isRequired,
    onChangeSearchBy: PropTypes.func.isRequired,
    onChangeSortBy: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    search_by: PropTypes.string.isRequired,
    sort_by: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};