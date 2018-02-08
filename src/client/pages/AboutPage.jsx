import React from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from 'reducers/todoReducer';

import About from 'components/about/About';

const AboutPage = () => <About />;

// Use the loadData function to fetch data on server!
function loadData({ dispatch }) {
  return dispatch(fetchTodos());
}

const mapDispatchToProps = { fetchTodos };

export default {
  loadData,
  component: connect(null, mapDispatchToProps)(AboutPage),
};
