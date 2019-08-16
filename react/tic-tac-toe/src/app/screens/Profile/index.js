import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import profilePic from '../../assets/shibapp.jpg';
import goBack from '../../assets/hand-point-left-solid.svg';
import { GAME } from '../../../constants/routes';

import styles from './styles.module.scss';

class Profile extends Component {
  handleGame = () => {
    this.props.goBackToGame();
  };

  render() {
    return (
      <div className={styles.profileCard}>
        <img src={profilePic} alt="profilePic" className={styles.profilePicture} />
        <span className={styles.userName}> {`User: ${this.props.userName}`} </span>
        <button className={styles.goBack} type="button" onClick={this.handleGame}>
          <img className={styles.icons} src={goBack} alt="goBackHand" />
        </button>
      </div>
    );
  }
}

Profile.propTypes = {
  goBackToGame: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  userName: state.login.userName
});

const mapDispatchToProps = dispatch => ({
  goBackToGame: () => dispatch(push(GAME))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
