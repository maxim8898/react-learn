import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { app } from "./reducers/reducers";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import './css/base.css';

let store = createStore(app);

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.sendRequest = this.sendRequest.bind(this);
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onChangeSearchBy = this.onChangeSearchBy.bind(this);
        this.onChangeSortBy = this.onChangeSortBy.bind(this);
        this.mockData = this.sendRequest();
        this.state = {
            query: "Quentin Tarantino",
            search_by: "title",
            sort_by: "release date"
        }
    }

    sendRequest() {
        return require("./mockdata.json");
    }

    onChangeSearchBy(name) {
        this.setState({search_by: name})
    }

    onChangeSortBy(name) {
        this.setState({sort_by: name});
    }

    onChangeQuery(query) {
        query = query.target.value;
        this.setState({query: query});
    }

    render() {
        return(
            <React.Fragment>
                <Header
                    number={this.mockData.total}
                    query = {this.state.query}
                    search_by = {this.state.search_by}
                    sort_by = {this.state.sort_by}
                    onChangeQuery = {this.onChangeQuery}
                    onChangeSearchBy = {this.onChangeSearchBy}
                    onChangeSortBy = {this.onChangeSortBy}
                />
                <Content data={this.mockData.data}/>
                <div className="footer">netflixroulette</div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));
