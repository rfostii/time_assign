export const ROUTING = 'ROUTING';

export const navigateTo = nextUrl => ({
    type: ROUTING,
    payload: {
        method: 'push',
        nextUrl
    }
});

export const navigateBack = () => ({
    type: ROUTING,
    payload: {
        method: 'goBack'
    }
});
