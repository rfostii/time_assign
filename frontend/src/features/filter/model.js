export default {
    state: {},
    reducers: {
        filter(state, filter) {
            return { ...state, ...filter };
        },
    },
    effects: ({ auth }) => ({
        async loadCompanies(payload, state) {
            
        },
    })
};

export const getToken = state => state.auth.token;
export const isAuthorized = state => state.auth.authorized;
