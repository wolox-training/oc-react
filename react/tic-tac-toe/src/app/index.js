import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from '../redux/store';

import '../scss/application.scss';
import Routes from './components/Routes';

function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AppContainer>
  );
}

export default App;
