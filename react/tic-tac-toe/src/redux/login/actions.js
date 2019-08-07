import LoginService from '../../services/LoginService';

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
