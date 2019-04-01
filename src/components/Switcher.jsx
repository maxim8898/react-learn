import React from "react";

export class Switcher extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton(name) {
        this.props.onSwitch(name);
    }

    render() {
        return(
            <div className={this.props.containerClass}>
                <div className={"label"}>{this.props.label}</div>
                {
                    this.props.options ?
                    <div className={this.props.classes}>
                        {this.props.options.map(
                            option => <SwitchButton
                                checked={ this.props.checked === option ? "checked" : "unchecked" }
                                onClick={ (function() {this.onClickButton(option)}).bind(this) }
                                option={option}
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
