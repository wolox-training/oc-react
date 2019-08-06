import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function TopBar({ handleClick, userEmail, isLogged }) {
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      {isLogged && (
        <Fragment>
          <button className={styles.user} type="button" onClick={handleClick}>
            <FontAwesomeIcon icon={faUser} /> {`${userEmail} is logged`}
          </button>
          <button className={styles.buttonLogOut} type="button" onClick={handleClick}>
            {'Log Out'} <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </Fragment>
      )}
    </nav>
  );
}

TopBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  isLogged: PropTypes.bool
};

export default TopBar;
