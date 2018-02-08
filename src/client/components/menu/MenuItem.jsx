import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './MenuItem.scss';

const MenuItem = (props) => {
  const {
    children,
    href,
    pathname,
    to,
  } = props;

  if (to) {
    // Link component will navigate through client
    return (
      <li className={`${styles.item} ${pathname === to ? styles.active : ''}`}>
        <Link className={styles.link} to={to}>{children}</Link>
      </li>
    );
  }

  // <a> tag will navigate through server
  return (
    <li className={`${styles.item} ${pathname === href ? styles.active : ''}`}>
      <a className={styles.link} href={href}>{children}</a>
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  href: PropTypes.string,
  pathname: PropTypes.string,
  to: PropTypes.string,
};

MenuItem.defaultProps = {
  href: null,
  pathname: null,
  to: null,
};

export default MenuItem;
