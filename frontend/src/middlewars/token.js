import axios from 'axios';
import * as actionType from 'features/Auth/types';


export default store => next => action => { 
    if (action.type === actionType.SET_TOKEN) {
        const token = action.payload;

        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        } else {
            axios.defaults.headers.common['Authorization'] = null;
        }   
    }    
    next(action);
}