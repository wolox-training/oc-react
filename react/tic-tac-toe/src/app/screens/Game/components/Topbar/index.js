import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';

import { PROFILE } from '../../../../../constants/routes';
import actionsCreators from '../../../../../redux/auth/actions';

import TopBar from './layout';

class TopBarContainer extends Component {
  handleLogout = () => {
    this.props.getLogout();
  };

  handleProfile = () => {
    this.props.getProfile();
  };

  render() {
    const { userEmail, isLogged } = this.props;
    return (
      <TopBar
        handleLogout={this.handleLogout}
        userEmail={userEmail}
        isLogged={isLogged}
        handleProfile={this.handleProfile}
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
