import React from "react";
import { SearchBlock } from "./SearchBlock";
import { Sorter } from "./Sorter";

export class Header extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className={"search-container"}>
                    <SearchBlock />
                </div>
                <div className={"highlighted"}>
                    <Sorter />
                </div>

            </React.Fragment>
        )
    }
}
