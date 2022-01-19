import { combineReducers } from 'redux';
import player from './player';
import gameReducer from './game';
import token from './token';

const rootReducer = combineReducers({ player, gameReducer, token });

export default rootReducer;
