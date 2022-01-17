import { combineReducers } from 'redux';
import playerReducer from './player';
import gameReducer from './game';
import token from './token';

const rootReducer = combineReducers({ playerReducer, gameReducer, token });

export default rootReducer;

/*
const initialState = {
  token: [],
  userInfo: [],
  // name: '',
  assertions: 0,
  score: 0,
  // gravatarEmail: '',
  checking: false,
  question: [],
  errorToken: 0,
};

const rootReducer = (state = initialState, { type, payload }) => {
  const cases = {
    [SAVE_TOKEN]: { ...state, token: payload },
    [CHECK_ANSWER]: { ...state, checking: true },
    [ADD_PLAYER]: {
      ...state,
      userInfo: payload,
    },
    // [SAVE_QUESTION]: {
    //   ...state,
    //   question: payload.results,
    //   errorToken: payload.response_code,
    // },
  };
  if (cases[type]) return cases[type];
  return state;
};
 */
