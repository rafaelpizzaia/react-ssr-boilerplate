import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/reducers';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'https://localhost:7000', // Setup your backend url here!
    headers: { cookie: req.get('cookie') || '' },
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
  );

  return store;
};
