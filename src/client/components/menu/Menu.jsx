import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.scss';

const Menu = ({ children, pathname }) => (
  <nav className={styles.menu}>
    <ul>
      {children.map((item, key) => cloneElement(item, { pathname, key }))}
    </ul>
  </nav>
);

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  pathname: PropTypes.string,
};

Menu.defaultProps = {
  pathname: null,
};

export default Menu;
