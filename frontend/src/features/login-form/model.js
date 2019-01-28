import axios from 'axios';
import { login } from '../../api/user';
import { LOCAL_STORAGE_KEYS } from '../../constants';

const initialState = {
    token: null,
    user: null,
    error: null,
    authenticated: false,
    isLoading: false
};

const getState = () => {
    const auth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.auth));
    
    if (auth) {
        return {
            ...initialState,
            authenticated: true,
            ...auth
        };
    }
    return initialState;
};

export default {
    state: getState(),
    reducers: {
        getTokenStart(state) {
            state.isLoading = true;
        },
        getTokenEnd(state) {
            state.isLoading = false;
        },
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
            state.authenticated = true;
        },
        setError(state, error) {
            state.error = error;
        },
        reset() {
            return initialState;
        }
    },  
    effects: (dispatch) => ({
        async getToken({ email, password }) {            
            this.getTokenStart();
            
            try {
                const { token, user } = await login(email, password);            
                localStorage.setItem(
                    LOCAL_STORAGE_KEYS.auth, 
                    JSON.stringify({ token: token.token, user })
                );
                axios.defaults.headers.common['Authorization'] = 'JWT ' + token.token;
                this.setToken(token.token);
                this.setUser(user);
                this.setError(null);
                dispatch.nav.navigate('/');
            } catch(e) {
                this.setError('Невдалося розпізнати комбінацію логіна і пароля');
            } finally {
                this.getTokenEnd();
            }
        }, 
        logout() {            
            this.reset();
            localStorage.removeItem(LOCAL_STORAGE_KEYS.auth);
            axios.defaults.headers.common['Authorization'] = null;
        },    
    })
};

export const getToken = state => state.auth.token;
export const getUser = state => state.auth.user;
export const isAuthenticated = state => state.auth.authenticated;
export const isLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;
