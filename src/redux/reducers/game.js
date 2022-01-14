import { CHECK_ANSWER, SAVE_TOKEN } from '../actions';

const initialState = {
  token: [],
  checking: false,
  question: [],
  errorToken: 0,
};

const gameReducer = (state = initialState, { type, payload }) => {
  const cases = {
    [SAVE_TOKEN]: { ...state, token: payload },
    [CHECK_ANSWER]: { ...state, checking: true },
    // [SAVE_QUESTION]: {
    //   ...state,
    //   question: payload.results,
    //   errorToken: payload.response_code,
    // },
  };
  if (cases[type]) return cases[type];
  return state;
};

export default gameReducer;
