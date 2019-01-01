import { ROUTING } from './actions';
import history from '../createHistory';

export default () => next => action => {
    if (action.type === ROUTING) {
        const { method, nextUrl, params = {} } = action.payload;
        history[method]({
            pathname: nextUrl,
            ...params
        });
    }    
    next(action);
}