import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTodos } from 'reducers/todoReducer';

import Home from 'components/home/Home';

class HomePage extends Component {
  static propTypes = {
    fetchTodos: PropTypes.func.isRequired,
  }

  componentWillMount() {
    // This will be fetched on client!
    this.props.fetchTodos();
  }

  render() {
    return <Home />;
  }
}

// Use the loadData function to fetch data on server!
function loadData({ dispatch }) {
  return dispatch(fetchTodos());
}

const mapDispatchToProps = { fetchTodos };

export default {
  loadData,
  component: connect(null, mapDispatchToProps)(HomePage),
};
