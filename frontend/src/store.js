import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { init } from "@rematch/core";
import immerPlugin from '@rematch/immer';
import { models } from './features';
import { redirect } from './middleware';
import { history } from './plugins';

const middleware = [  
    thunk,
    redirect
];

if (process.env !== 'production') {
    middleware.push(createLogger());
}

export default init({
    models,
    plugins: [
        history(),
        immerPlugin()
    ],
    redux: {           
        middlewares: [...middleware],
    },
});
