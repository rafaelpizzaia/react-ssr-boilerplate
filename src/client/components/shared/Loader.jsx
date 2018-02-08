import React from 'react';

import ReactLogo from 'images/react.png';

import styles from './Loader.scss';

export default () => (
  <div className={styles.loader}>
    <img alt="loader" src={ReactLogo} />
  </div>
);

