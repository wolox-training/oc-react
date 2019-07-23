import React, { Fragment } from 'react';

import Game from './screens/Game';
import LoginForm from './screens/Form/LoginForm';

import '../scss/application.scss';

function App() {
  submit = values => {
    window.alert (JSON.stringify)
  }
  return (
    <Fragment>
      <Game />
      <LoginForm onSubmit={this.submit}/>
    </Fragment>
  );
}

export default App;
