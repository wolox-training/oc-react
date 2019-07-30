export const actions = {
  LOGS_IN: '@@AUTH/LOGS_IN'
};

export default {
  logIn: (email, token) => ({
    type: actions.LOGS_IN,
    payload: {
      email,
      token
    }
  })
};
