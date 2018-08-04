export const FILTER = 'FILTER';

export const filter = payload => {
    return ({ type: FILTER, payload });
};