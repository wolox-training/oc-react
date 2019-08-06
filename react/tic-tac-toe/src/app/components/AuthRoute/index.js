import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TOKEN } from '../../../constants/autentications';
import { LOGIN } from '../../../constants/routes';
import actionsCreators from '../../../redux/login/actions';

class AuthRoute extends Component {
  componentDidMount() {
    if (this.props.isPrivate) {
      const token = localStorage.getItem(TOKEN);
      if (!token) {
        this.props.redirectLogin();
      }
      this.props.authInit();
    }
  }

  render() {
    return <Route path={this.props.path} component={this.props.component} />;
  }
}

AuthRoute.propTypes = {
  authInit: PropTypes.func.isRequired,
  component: PropTypes.element.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirectLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  redirectLogin: () => dispatch(push(LOGIN)),
  authInit: () => dispatch(actionsCreators.authInit())
});

export default connect(
  null,
  mapDispatchToProps
)(AuthRoute);
