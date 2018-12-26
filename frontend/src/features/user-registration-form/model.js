import { register } from './api';

export default {
    state: {
        isLoading: false,
        error: null,
    },
    reducers: {
        registerStart(state) {
            state.isLoading = true;
        },
        registerEnd(state) {
            state.isLoading = false;
        },
        setError(state, error) {
            state.error = error;
        },
    },
    effects: (dispatch) => ({
        async register({ email, password }) { 
            this.registerStart();
            try {
                const token = await register(email, password);
                dispatch.auth.setToken(token);
                this.setError(null);
            } catch (e) {
                this.setError('Невдалося зареєструватися. Спробуйте ще раз.');
            } finally {
                this.registerEnd();
            }         
        },       
    })
};

export const isLoading = state => state.registration.isLoading;
export const getError = state => state.auth.error;
