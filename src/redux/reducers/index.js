// import { combineReducers } from 'redux';
import { CHECK_ANSWER, SAVE_TOKEN, ADD_PLAYER } from '../actions';
// import playerReducer from './player';
// import gameReducer from './game';

// const testReducer = combineReducers({ playerReducer, gameReducer });

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

// export default testReducer;

// const INITIAL_STATE = {
//   name: '',
//   assertions: 0,
//   score: 0,
//   gravatarEmail: '',
// };

// const playerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case ADD_PLAYER:
//     return {
//       ...state,
//       name: action.payload,
//       gravatarEmail: action.payload,
//     };
//   default:
//     return state;
//   }
// };

// export default playerReducer;

export default rootReducer;
