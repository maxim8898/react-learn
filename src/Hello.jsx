import React from "react";

export class Hello extends React.PureComponent {
    render() {
        return (
            <div className="hello-world">
                <h1>{this.props.header}</h1>
            </div>
        )
    }
}