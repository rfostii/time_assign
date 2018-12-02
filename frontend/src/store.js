import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { init } from "@rematch/core";
import immerPlugin from '@rematch/immer';
import { models, reducers } from './features';
import { redirect } from './middleware';
import { history } from './plugins';

const middleware = [
    createLogger(),
    thunk,
    redirect
];

export default init({
    models,
    plugins: [
        history,
        immerPlugin()
    ],
    redux: {
        reducers,        
        middlewares: [...middleware],
    },
});
