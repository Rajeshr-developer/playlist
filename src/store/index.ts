import { createStore, combineReducers, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { songsReducer } from '../reducers/songsReducer';
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({
    rootState: rootReducer,
    albumState: songsReducer
})
    , applyMiddleware(thunk));