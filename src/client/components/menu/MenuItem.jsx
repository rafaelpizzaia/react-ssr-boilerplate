import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuItem.scss';

const MenuItem = ({ children, pathname, to }) => (
  <li className={`${styles.item} ${pathname === to ? styles.active : ''}`}>
    <a href={to}>
      {children}
    </a>
  </li>
);

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  pathname: PropTypes.string,
  to: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  pathname: null,
};

export default MenuItem;
