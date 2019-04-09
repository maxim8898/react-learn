import React from "react";
import PropTypes from 'prop-types';

export function Switcher(props) {
    return(
        <div className={props.containerClass}>
            <div className={"label"}>{props.label}</div>
            {
                props.options ?
                <div className={props.classes}>
                    {
                        props.options.map(
                            (option, i) => <SwitchButton
                                key={i.toString()}
                                checked={props.checked === option ? "checked" : "unchecked"}
                                onClick={(function () {
                                    props.onSwitch(option)
                                }).bind(this)}
                                option={option}
                                value={option}/>
                        )
                    }
                </div> : <div>Empty</div>
            }
        </div>
    )
}

Switcher.propTypes = {
    onSwitch: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    checked: PropTypes.string.isRequired,
    containerClass: PropTypes.string,
    classes: PropTypes.string,
};
Switcher.defaultProps = {
    containerClass: "",
    classes: "",
};

function SwitchButton(props) {
    return (
        <button className={ props.checked } onClick={ props.onClick }>{ props.value }</button>
    )
}

SwitchButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
