import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

// serialize is used to avoid xss atack
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content =
    renderToString( // eslint-disable-line function-paren-newline
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>,
    ); // eslint-disable-line function-paren-newline
  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}

        <!-- Extract all meta tags -->
        ${helmet.meta.toString()}

        <link href="./style.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())};
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
