import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';
import { GAME, LOGIN } from '../../constants/routes';
import api from '../../config/api';
import { TOKEN } from '../../constants/autentications';

export const actions = {
  GET_LOGIN: '@@LOGIN/GET_LOGIN',
  GET_LOGIN_SUCCESS: '@@LOGIN/GET_LOGIN_SUCCESS',
  GET_LOGIN_FAILURE: '@@LOGIN/GET_LOGIN_FAILURE',
  GET_LOGOUT: '@@LOGOUT/GET_LOGOUT'
};

const actionsCreators = {
  getLogin: values => async dispatch => {
    dispatch({ type: actions.GET_LOGIN });
    const response = await LoginService.getLogin(values);
    if (response.ok) {
      const tokenEnc = window.btoa(response.data.token);
      window.localStorage.setItem({ TOKEN }, JSON.stringify(tokenEnc));
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
    dispatch(push(LOGIN));
    delete api.headers[TOKEN];
    localStorage.removeItem(TOKEN);
  }
};

export default actionsCreators;
