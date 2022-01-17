import { setItemLocalStore } from '../../helpers';
import getQuestions from '../../service/get';
import getToken from '../../service/getToken';

export const ADD_PLAYER = 'ADD_PLAYER';
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_TOKEN = 'SAVE_TOKEN';

export const addPlayer = (payload) => ({ type: ADD_PLAYER, payload });

export const checkAnswerAct = () => ({ type: CHECK_ANSWER });
export const saveQuestAct = (question) => ({
  type: SAVE_QUESTION,
  question,
});
export const saveToken = (payload) => ({ type: SAVE_TOKEN, payload });

/// THUNKS

export const getQuestionsAct = (token) => (dispatch) => {
  // log
  console.log('teste');
  getQuestions(token).then((data) => {
    const RESP_CODE_ERROR = 3;
    if (data.response_code === RESP_CODE_ERROR) {
      getToken().then((newToken) => {
        dispatch(saveToken(newToken.token));
        setItemLocalStore('token', newToken.token);
        dispatch(getQuestionsAct(newToken.token));
      });
    }
    return dispatch(saveQuestAct(data));
  });
};

/* export const getQuestionsAct = (token) => {
  console.log('');
  return (dispatch) => getQuestions(token).then((data) => dispatch(saveQuestAct(data)));
}; */

export const getTokenAct = () => (dispatch, callback) => getToken(callback).then((data) => {
  console.log('testeTOKEN', data.token);
  dispatch(saveToken(data.token));
  setItemLocalStore('token', data.token);
  callback();
});
