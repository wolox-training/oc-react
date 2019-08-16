import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { GAME, LOGIN, PROFILE } from '../../../constants/routes';
import { history } from '../../../redux/store';
import LoginForm from '../../screens/Login';
import Game from '../../screens/Game';
import TopBar from '../../screens/Game/components/Topbar';
import Profile from '../../screens/Profile';
import AuthRoute from '../AuthRoute';
import actionsAuth from '../../../redux/auth/actions';

class Routes extends Component {
  componentDidMount() {
    this.props.authInit();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <TopBar />
          <Switch>
            <AuthRoute path={GAME} component={Game} isPrivate />
            <AuthRoute path={LOGIN} component={LoginForm} />
            <AuthRoute path={PROFILE} component={Profile} isPrivate />
          </Switch>
        </Fragment>
      </ConnectedRouter>
    );
  }
}

Routes.propTypes = {
  authInit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  authInit: () => dispatch(actionsAuth.authInit())
});

export default connect(
  null,
  mapDispatchToProps
)(Routes);
