import { CHECK_ANSWER, SAVE_QUESTION, ERROR_TOKEN, SET_TIMER } from '../actions';

const initialState = {
  checking: false,
  question: {},
  errorToken: 0,
  error: '',
  timerGlobal: 30,

};

const gameReducer = (state = initialState, { type, question, payload }) => {
  const cases = {
    [CHECK_ANSWER]: { ...state, checking: true },
    [SAVE_QUESTION]: { ...state, question },
    [SET_TIMER]: { ...state, timerGlobal: payload },
    [ERROR_TOKEN]: { ...state, error: 'token não encontrado' },
  };
  if (cases[type]) return cases[type];
  return state;
};

export default gameReducer;
