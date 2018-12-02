import { ROUTING } from './actions';
import history from '../createHistory';

export default () => next => action => {
    if (action.type === ROUTING) {
        const { method, nextUrl } = action.payload;
        history[method](nextUrl);
    }    
    next(action);
}