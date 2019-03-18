import React from "react";
import ReactDOM from "react-dom";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { keywords: "React", msg: "Default message" };
        this.onKeywordsChange = this.onKeywordsChange.bind(this);
        this.onSendClick = this.onSendClick.bind(this);
    }
    onSendClick(event) {
        this.setState({ msg: this.state.keywords });
    }
    onKeywordsChange(event) {
        this.setState({ keywords: event.target.value });
    }
    render() {
        return (
            <div className="form-inline">
                <input
                    type="text"
                    name="login"
                    placeholder={this.state.keywords}
                    onChange={this.onKeywordsChange}
                    className="form-control"
                />
                <button
                    className="btn btn-primary"
                    type="input"
                    onClick={this.onSendClick}
                >
                    Send
                </button>
                <br />
                <br />
                <Message msg={this.state.msg} />
            </div>
        );
    }
}

class Message extends React.PureComponent {
    render() {
        return (
            <div className="message">
                <p>{this.props.msg}</p>
            </div>
        );
    }
}

class Hello extends React.PureComponent {
    render() {
        return (
            <div className="hello-world">
                <h1>{this.props.header}</h1>
            </div>
        )
    }
}

function Root() {
    return React.createElement(
        "div",
        { className: "container" },
        <Hello header="React Learning!"/>,
        <SearchForm />
    );
}

ReactDOM.render(<Root />, document.getElementById("root"));
