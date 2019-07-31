import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';
import { GAME } from '../../constants/routes';
import api from '../../config/api';
import { TOKEN } from '../../constants/autentications';

export const actions = {
  GET_LOGIN: '@@LOGIN/GET_LOGIN',
  GET_LOGIN_SUCCESS: '@@LOGIN/GET_LOGIN_SUCCESS',
  GET_LOGIN_FAILURE: '@@LOGIN/GET_LOGIN_FAILURE'
};

const actionsCreators = {
  getLogin: values => async dispatch => {
    dispatch({ type: actions.GET_LOGIN });
    const response = await LoginService.getLogin(values);
    if (response.ok) {
      const tokenEnc = window.btoa(response.data.token);
      window.localStorage.setItem({ TOKEN }, JSON.stringify(tokenEnc));
      api.setHeader({ TOKEN }, tokenEnc);
      dispatch(push(GAME));
      dispatch({
        type: actions.GET_LOGIN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionsCreators;
