import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import app from "./reducers/reducers";
import './css/base.css';
import { Provider } from 'react-redux';
import HeaderContainer from './containers/HeaderContainer';
import ContentContainer from './containers/ContentContainer';

let store = createStore(
    app,
    {},
    applyMiddleware(thunk)
);

function Main() {
    return (
        <Provider store={store}>
            <HeaderContainer/>
            <ContentContainer/>
            <div className="footer">netflixroulette</div>
        </Provider>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"));
