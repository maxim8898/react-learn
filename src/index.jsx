import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import app from "./reducers/reducers";
import './css/base.css';
import { Provider } from 'react-redux';
import HeaderContainer from './containers/HeaderContainer';
import ContentContainer from './containers/ContentContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

let store = createStore(
    app,
    {},
    applyMiddleware(thunk)
);

function Main() {
    return (
        <Router>
            <Provider store={store}>
                <HeaderContainer/>
                <ContentContainer/>
                <div className="footer">netflixroulette</div>
            </Provider>
        </Router>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"));
