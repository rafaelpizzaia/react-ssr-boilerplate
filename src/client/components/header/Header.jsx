import React from 'react';
import PropTypes from 'prop-types';

import Menu from 'components/menu/Menu';
import MenuItem from 'components/menu/MenuItem';

import Button from 'components/shared/Button';

import ReactLogo from 'images/react.png';

import styles from './Header.scss';

const Header = (props) => {
  const {
    location: {
      pathname,
    },
  } = props;

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        alt="react"
        src={ReactLogo}
      />

      <Menu pathname={pathname}>
        <MenuItem to="/">
          Home
        </MenuItem>
        <MenuItem to="/about">
          About
        </MenuItem>
      </Menu>

      <Button onClick={() => alert('Clicked!')}>
        Button
      </Button>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Header;
