import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import posts from './postReducer'

const intialState = {};

const allReducers = combineReducers({
    posts
})

// const middlewares = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, intialState, composeEnhancer(applyMiddleware(thunk))
);

export default store;