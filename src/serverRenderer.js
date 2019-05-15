import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Root from './Root';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from "./reducers/reducers";

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {

    const context = {};
    const store = createStore(app, {}, applyMiddleware(thunkMiddleware));

    const renderRoot = () => ( <
        Root context={context}
             location={req.url}
             Router={StaticRouter}
             store={store}
      />
    );

    renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}
