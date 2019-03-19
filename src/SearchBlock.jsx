import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";

class SearchBlock extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <Header classes={"title-search"} title={"Find your movie"}/>
            </div>
        )
    }
}

//ReactDOM.render(<SearchBlock />, document.getElementById("test"));
