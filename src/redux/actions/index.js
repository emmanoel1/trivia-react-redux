import { getItemLocalStore, setItemLocalStore } from '../../helpers';
import getQuestions from '../../service/get';
import getToken from '../../service/getToken';

export const ADD_PLAYER = 'ADD_PLAYER';
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_TOKEN = 'SAVE_TOKEN';

export const addPlayer = (payload) => ({ type: ADD_PLAYER, payload });

export const checkAnswerAct = () => ({ type: CHECK_ANSWER });
export const saveQuestionAct = (question) => ({
  type: SAVE_QUESTION,
  question,
});
export const saveToken = (payload) => ({ type: SAVE_TOKEN, payload });

/// THUNKS

export const getQuestionsAct = (token) => (dispatch) => getQuestions(token).then((data) => dispatch(saveQuestionAct(data)));

export const getTokenAct = () => (dispatch) => {
  getToken()
    .then((data) => dispatch(saveToken(data.token)))
    .then((data) => setItemLocalStore('token', data.payload));
};
