import React from "react";
import { Switcher } from "./Switcher";

export class Sorter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {number: this.props.number};
        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch(name) {
        this.props.onSwitch(name);
    }

    render() {
        return (
            <React.Fragment>
                <Founded number={this.state.number}/>
                <Switcher
                    onSwitch={this.onSwitch}
                    label={"Sort by"}
                    containerClass={"sort-by-block"}
                    classes={"sort-by"}
                    checked={this.props.sort_by}
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
