import getQuestions from '../../service/get';

const ADD_PLAYER = 'ADD_PLAYER';
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const SAVE_QUESTION = 'CHECK_ANSWER';

export const addPlayer = (payload) => ({ type: ADD_PLAYER, payload });

export const checkAnswerAct = () => ({ type: CHECK_ANSWER });
export const saveQuestionAct = (payload) => ({ type: SAVE_QUESTION, payload });

/// THUNKS

export const getQuestionsAct = () => (dispatch) => {
  const token = getItemLocalStore('token');
  getQuestions(token.token).then((data) => dispatch(saveQuestionAct(data)));
};
