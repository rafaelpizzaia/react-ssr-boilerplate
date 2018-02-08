import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from 'components/shared/Loader';

import styles from './Home.scss';

const Home = (props) => {
  const {
    loading,
    todos,
  } = props;

  if (loading) {
    return (
      <div className={styles.home}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.home}>
      <span>This page fetch data on client!</span>

      <br />
      <br />

      <span>Todos List:</span>
      <ul>
        {todos.map(todo => <li key={`todo_${todo}`}>{todo}</li>)}
      </ul>
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.string),
};

Home.defaultProps = {
  loading: false,
  todos: [],
};

// const mapStateToProps = ({ todoReducer }) => ({ ...todoReducer }); -> Better this away ;)
const mapStateToProps = (state) => {
  const { todoReducer } = state;

  return {
    todos: todoReducer.todos,
    loading: todoReducer.loading,
  };
};

export default connect(mapStateToProps)(Home);
