export const ROUTING = 'ROUTING';

export const navigateTo = (nextUrl, params) => ({
    type: ROUTING,
    payload: {
        method: 'push',
        nextUrl,
        params
    }
});

export const navigateBack = () => ({
    type: ROUTING,
    payload: {
        method: 'goBack'
    }
});
