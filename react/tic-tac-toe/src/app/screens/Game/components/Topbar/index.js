import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../../../redux/auth/actions';

import TopBar from './layout';

class TopBarContainer extends Component {
  handleClick = () => {
    this.props.getLogout();
  };

  render() {
    const { userEmail, isLogged } = this.props;
    return <TopBar handleClick={this.handleClick} userEmail={userEmail} isLogged={isLogged} />;
  }
}

TopBarContainer.propTypes = {
  getLogout: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  isLogged: PropTypes.bool
};

const mapStateToProps = state => ({
  userEmail: state.login.userEmail,
  isLogged: state.login.isLogged
});

const mapDispatchToProps = dispatch => ({
  getLogout: () => dispatch(actionsCreators.getLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarContainer);
