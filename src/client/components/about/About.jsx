import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './About.scss';

const About = ({ todos }) => (
  <div className={styles.about}>
    <span>This page fetch data on server!</span>

    <br />
    <br />

    <span>Todos List:</span>
    <ul>
      {todos.map(todo => <li key={`todo_${todo}`}>{todo}</li>)}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  const { todoReducer } = state;

  return {
    todos: todoReducer.todos,
    loading: todoReducer.loading,
  };
};

About.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
};

About.defaultProps = {
  todos: [],
};

export default connect(mapStateToProps)(About);
