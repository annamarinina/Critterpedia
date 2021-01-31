import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {dataReducer, initialState} from './reducer';

const middlewares = [thunk];

const store = createStore(dataReducer, initialState, applyMiddleware(...middlewares));

export default store;