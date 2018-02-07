import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));

app.use('/api', proxy('https://localhost:7000', { // Setup your backend url here!
  proxyReqOptDecorator(header) {
    const opts = { ...header };

    opts.headers['x-forwarded-host'] = 'localhost:3000';

    return opts;
  },
}));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null));

  Promise.all(promises).then(() => {
    const context = {};

    const content = renderer(req, store, context);

    if (context.action) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    return res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000'); // eslint-disable-line no-console
});
