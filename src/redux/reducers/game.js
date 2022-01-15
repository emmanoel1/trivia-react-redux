import { CHECK_ANSWER, SAVE_QUESTION } from '../actions';

const initialState = {
  checking: false,
  question: {},
  errorToken: 0,
};

const gameReducer = (state = initialState, { type, question }) => {
  const cases = {
    [CHECK_ANSWER]: { ...state, checking: true },
    [SAVE_QUESTION]: { ...state, question },
  };
  if (cases[type]) return cases[type];
  return state;
};

export default gameReducer;
