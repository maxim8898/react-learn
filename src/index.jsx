import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import './css/base.css';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.mockData = require("./mockdata.json");
    }
    render() {
        return(
            <React.Fragment>
                <Header/>
                <Content data={this.mockData.data}/>
                <div className="footer">netflixroulette</div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));
