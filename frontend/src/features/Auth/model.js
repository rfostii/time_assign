import axios from 'axios';
import { login } from 'services/Auth';
import { createUser } from 'services/Auth';


const LOCAL_STORAGE_KEY = 'time_assign_token';

const getState = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY);
  const state = { token: null, authorized: false };

  if (token) {
    state.authorized = true;
    state.token = token;
  }
  return state;
};

export default {
  state: getState(),
  reducers: {    
    setToken(state, token) {
      localStorage.setItem(LOCAL_STORAGE_KEY, token);
      axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
      return {...state, authorized: true, token };
    },
  },
  effects: (dispatch) => ({    
    async getToken({ email, password }) {
      const resp = await login(email, password);
      dispatch.auth.setToken(resp.data.token);
    },
    async signup(email, password) {
      await createUser(email, password);
      dispatch.auth.getToken({ email, password });
    }
  })
};