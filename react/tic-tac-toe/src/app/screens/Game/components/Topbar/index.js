import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';

import { PROFILE } from '../../../../../constants/routes';
import actionsCreators from '../../../../../redux/auth/actions';

import TopBar from './layout';

class TopBarContainer extends Component {
  handleLogout = () => {
    const { getLogout } = this.props;
    getLogout();
  };

  handleProfile = () => {
    const { getProfile } = this.props;
    getProfile();
  };

  render() {
    const { userEmail, isLogged } = this.props;
    const { handleLogout, handleProfile } = this;
    return (
      <TopBar
        handleLogout={handleLogout}
        userEmail={userEmail}
        isLogged={isLogged}
        handleProfile={handleProfile}
      />
    );
  }
}

TopBarContainer.propTypes = {
  getLogout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  isLogged: PropTypes.bool
};

const mapStateToProps = state => ({
  userEmail: state.login.userEmail,
  isLogged: state.login.isLogged
});

const mapDispatchToProps = dispatch => ({
  getLogout: () => dispatch(actionsCreators.getLogout()),
  getProfile: () => dispatch(push(PROFILE))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarContainer);
