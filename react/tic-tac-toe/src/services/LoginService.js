import api from '../config/api';

export default {
  getLogin: values => api.post('/login', values)
};
