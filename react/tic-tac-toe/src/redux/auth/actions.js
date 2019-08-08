import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';
import { GAME, LOGIN } from '../../constants/routes';
import api from '../../config/api';
import { TOKEN } from '../../constants/autentications';

export const actions = {
  GET_LOGIN: '@@AUTH/GET_LOGIN',
  GET_LOGIN_SUCCESS: '@@AUTH/GET_LOGIN_SUCCESS',
  GET_LOGIN_FAILURE: '@@AUTH/GET_LOGIN_FAILURE',
  GET_LOGOUT: '@@AUTH/GET_LOGOUT',
  AUTH_INIT: '@@AUTH/AUTH_INIT'
};

const actionsAuth = {
  getLogin: values => async dispatch => {
    dispatch({ type: actions.GET_LOGIN });
    const response = await LoginService.getLogin(values);
    if (response.ok) {
      const tokenEnc = window.btoa(response.data.token);
      window.localStorage.setItem(TOKEN, JSON.stringify(tokenEnc));
      api.setHeader(TOKEN, tokenEnc);
      dispatch(push(GAME));
      dispatch({
        type: actions.GET_LOGIN_SUCCESS,
        payload: { token: response.data, userEmail: values.email }
      });
    } else {
      dispatch({
        type: actions.GET_LOGIN_FAILURE,
        payload: response.problem
      });
    }
  },
  getLogout: () => dispatch => {
    dispatch({
      type: actions.GET_LOGOUT
    });
    dispatch(push(LOGIN));
    delete api.headers[TOKEN];
    localStorage.removeItem(TOKEN);
  },
  authInit: () => dispatch => {
    dispatch({
      type: actions.AUTH_INIT
    });
  }
};

export default actionsAuth;
