import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../../../redux/login/actions';

import TopBar from './layout';

class TopBarContainer extends Component {
  handleClick = () => {
    this.props.getLogout();
  };

  render() {
    return (
      <TopBar
        handleClick={this.handleClick}
        userEmail={this.props.userEmail}
        isLogged={this.props.isLogged}
      />
    );
  }
}

TopBarContainer.propTypes = {
  userEmail: PropTypes.string.isRequired
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
