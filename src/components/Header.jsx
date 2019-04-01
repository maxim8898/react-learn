import React from "react";
import { SearchBlock } from "./SearchBlock";
import { Sorter } from "./Sorter";

export class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onChangeSearchBy = this.onChangeSearchBy.bind(this);
        this.onChangeSortBy = this.onChangeSortBy.bind(this);
    }

    onChangeSearchBy(name) {
        this.props.onChangeSearchBy(name);
    }

    onChangeSortBy(name) {
        this.props.onChangeSortBy(name);
    }

    onChangeQuery(query) {
        this.props.onChangeQuery(query);
    }

    render() {
        return (
            <React.Fragment>
                <div className={"search-container"}>
                    <SearchBlock
                        onChangeQuery={this.onChangeQuery}
                        onSwitch={this.onChangeSearchBy}
                        query={this.props.query}
                        search_by={this.props.search_by}
                    />
                </div>
                <div className={"highlighted"}>
                    <Sorter
                        onSwitch={this.onChangeSortBy}
                        sort_by={this.props.sort_by}
                        number={this.props.number}
                    />
                </div>
            </React.Fragment>
        )
    }
}
