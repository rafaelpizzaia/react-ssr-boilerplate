import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ children, className, ...other }) => (
  <button className={`${styles.button} ${className}`} {...other}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
