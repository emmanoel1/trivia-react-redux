import { CHECK_ANSWER, 
  SAVE_QUESTION,
   ERROR_TOKEN, SET_TIMER, START_ANSWER, DISABLE_ANSWER } from '../actions';

const initialState = {
  checking: false,
  question: {},
  errorToken: 0,
  error: '',
  timerGlobal: 30,
  nextQuestion: false,
  disableAnswer: false,
  startCounter: true,
};

const gameReducer = (state = initialState, { type, question, payload }) => {
  const cases = {
    [CHECK_ANSWER]: { ...state, checking: true, nextQuestion: true, startCounter: false },
    [DISABLE_ANSWER]: { ...state, disableAnswer: true },
    [START_ANSWER]: { ...state, checking: false, startCounter: true, timerGlobal: 30 },
    [SAVE_QUESTION]: { ...state, question },
    [SET_TIMER]: { ...state, timerGlobal: payload },
    [ERROR_TOKEN]: { ...state, error: 'token não encontrado' },
  };
  if (cases[type]) return cases[type];
  return state;
};

export default gameReducer;
