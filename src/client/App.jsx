import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import styles from 'styles/style.scss';

import Header from 'components/header/Header';

const App = (props) => {
  const {
    route,
    location,
  } = props;

  return (
    <div>
      <Header location={location} />
      <section className={styles.main}>
        {renderRoutes(route.routes)}
      </section>
    </div>
  );
};

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
  location: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default {
  component: App,
};
