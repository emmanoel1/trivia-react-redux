import { CHECK_ANSWER, SAVE_QUESTION, ERROR_TOKEN } from '../actions';

const initialState = {
  checking: false,
  question: {},
  errorToken: 0,
  error: '',
};

const gameReducer = (state = initialState, { type, question }) => {
  const cases = {
    [CHECK_ANSWER]: { ...state, checking: true },
    [SAVE_QUESTION]: { ...state, question },
    [ERROR_TOKEN]: { ...state, error: 'token não encontrado' },
  };
  if (cases[type]) return cases[type];
  return state;
};

export default gameReducer;
