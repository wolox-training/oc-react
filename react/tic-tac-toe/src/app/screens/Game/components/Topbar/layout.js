import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import userIcon from '../../../../assets/user-astronaut-solid.svg';
import logOut from '../../../../assets/sign-out-alt-solid.svg';

import styles from './styles.module.scss';

function TopBar({ handleProfile, handleLogout, userEmail, isLogged }) {
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      {isLogged && (
        <Fragment>
          <button className={styles.user} type="button" onClick={handleProfile}>
            <img className={styles.icons} src={userIcon} alt="userIcon" /> {`${userEmail} is logged`}
          </button>
          <button className={styles.buttonLogOut} type="button" onClick={handleLogout}>
            <span>Log Out</span>
            <img className={styles.icons} src={logOut} alt="logOutIcon" />
          </button>
        </Fragment>
      )}
    </nav>
  );
}

TopBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  handleProfile: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  isLogged: PropTypes.bool
};

export default TopBar;
