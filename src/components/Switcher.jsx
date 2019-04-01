import React from "react";

export class Switcher extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
            options: props.options
        };
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton(name) {
        this.setState({ checked: name });
    }

    render() {
        return(
            <div className={this.props.containerClass}>
                <div className={"label"}>{this.props.label}</div>
                {
                    this.state.options ?
                    <div className={this.props.classes}>
                        {this.state.options.map(
                            option => <SwitchButton
                                checked={ this.state.checked === option ? "checked" : "unchecked" }
                                onClick={ (function() {this.onClickButton(option)}).bind(this) }
                                value={option}/>
                        )}
                    </div> : <div>Empty</div>
                }
            </div>
        )
    }

}

function SwitchButton(props) {
    return (
        <button className={ props.checked } onClick={ props.onClick }>{ props.value }</button>
    )
}
