import React from "react";

class Header extends React.Component {
    render() {
        return (
            <h2 className={this.props.classes}>
                {this.props.title}
            </h2>
        )
    }
}
