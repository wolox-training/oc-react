import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LOGIN, GAME } from '../../../constants/routes';

class AuthRoute extends Component {
  componentDidUpdate() {
    if (this.props.isPrivate) {
      if (!this.props.isLogged) {
        this.props.redirectLogin();
      }
    } else if (this.props.isLogged) {
      this.props.redirectGame();
    }
  }

  render() {
    return <Route path={this.props.path} component={this.props.component} />;
  }
}

AuthRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirectGame: PropTypes.func.isRequired,
  redirectLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLogged: state.login.isLogged
});

const mapDispatchToProps = dispatch => ({
  redirectGame: () => dispatch(push(GAME)),
  redirectLogin: () => dispatch(push(LOGIN))
  // authInit: () => dispatch(actionsAuth.authInit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
