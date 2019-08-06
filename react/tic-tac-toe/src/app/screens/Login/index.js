/* eslint-disable no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actionsCreators from '../../../redux/login/actions';

import Login from './layout';

class LoginForm extends Component {
  handleSubmit = values => {
    this.props.getLogin(values);
  };

  render() {
    return <Login onSubmit={this.handleSubmit} />;
  }
}

LoginForm.propTypes = {
  getLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getLogin: values => dispatch(actionsCreators.getLogin(values))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
