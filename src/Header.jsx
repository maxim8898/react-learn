import React from "react";

export class Header extends React.PureComponent {
    render() {
        return (
            <h2 className={this.props.classes}>
                {this.props.title}
            </h2>
        )
    }
}
