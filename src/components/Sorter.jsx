import React from "react";
import { Switcher } from "./Switcher";

export class Sorter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {number: "7"};
    }
    render() {
        return (
            <React.Fragment>
                <Founded number={this.state.number}/>
                <Switcher
                    label={"Sort by"}
                    containerClass={"sort-by-block"}
                    classes={"sort-by"}
                    checked={"release date"}
                    options={["release date", "rating"]}
                />
            </React.Fragment>
        )
    }
}

function Founded(props) {
    return (
        <div className={"founded-movies"}>
            {props.number} movies found
        </div>
    )
}
