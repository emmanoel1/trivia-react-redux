import { combineReducers } from 'redux';
import playerReducer from './player';
import gameReducer from './game';
import token from './token';

const rootReducer = combineReducers({ playerReducer, gameReducer, token });

export default rootReducer;
