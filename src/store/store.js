import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from  'redux-logger';

import configReducer from './reducers/config';

const rootReducer = combineReducers({
    config: configReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;