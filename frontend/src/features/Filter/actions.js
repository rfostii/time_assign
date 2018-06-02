import * as actionType from './types';


export const filter = payload => {
    return ({ type: actionType.FILTER, payload });
};