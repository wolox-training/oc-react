import React from 'react';

import Login from './Login/index';

function LoginForm({ handleSubmit }) {
  handleSubmit = values => {
    window.alert(JSON.stringify(values))
  };
  return <Login onSubmit={handleSubmit} />;
}

export default LoginForm;
