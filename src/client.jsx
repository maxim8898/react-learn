import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from './reducers/reducers';
import './css/base.css';
import Root from './Root';

const store = createStore(app, window.PRELOADED_STATE, applyMiddleware(thunkMiddleware));

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('root'));
