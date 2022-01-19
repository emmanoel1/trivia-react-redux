import { setItemLocalStore } from '../../helpers';
import getQuestions from '../../service/get';
import getToken from '../../service/getToken';

export const ADD_PLAYER = 'ADD_PLAYER';
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const ERROR_TOKEN = 'ERROR_TOKEN';
export const SET_TIMER = 'SET_TIMER';
export const START_ANSWER = 'START_ANSWER';
export const DISABLE_ANSWER = 'DISABLE_ANSWER';
export const SAVE_GRAVATAR = 'SAVE_GRAVATAR';
export const SAVE_RANK = 'SAVE_RANK';
export const START_AGAIN = 'START_AGAIN';

export const startAgainAct = () => ({ type: START_AGAIN });
export const disableAnswerAct = () => ({ type: DISABLE_ANSWER });
export const startAnswerAct = () => ({ type: START_ANSWER });
export const setTimerAct = (payload) => ({ type: SET_TIMER, payload });
export const addPlayer = (payload) => ({ type: ADD_PLAYER, payload });
export const saveRank = (payload) => ({ type: SAVE_RANK, payload });
export const saveGravatar = (payload) => ({ type: SAVE_GRAVATAR, payload });

export const checkAnswerAct = () => ({ type: CHECK_ANSWER });
export const saveQuestAct = (question) => ({
  type: SAVE_QUESTION,
  question,
});
export const saveToken = (payload) => ({ type: SAVE_TOKEN, payload });

/// THUNKS

export const getQuestionsAct = (token) => (dispatch) => {
  /*  if (token.length === 0) {
    getToken().then((newToken) => {
      console.log('TOOOOKEENNN TOOKEEN TOOKEN', newToken);
      dispatch(saveToken(newToken.token));
      setItemLocalStore('token', newToken.token);
      dispatch(getQuestionsAct(newToken.token));
    });
  } */

  getQuestions(token)
    .then((data) => {
      const RESP_CODE_ERROR = 3;
      console.log('response error', data.response_code);
      if (data.response_code === RESP_CODE_ERROR) {
        getToken().then((newToken) => {
          console.log('newToken', newToken);
          dispatch(saveToken(newToken.token));
          setItemLocalStore('token', newToken.token);
          dispatch(getQuestionsAct(newToken.token));
        });
      }
      return dispatch(saveQuestAct(data));
    })
    .catch();
};

/* export const getQuestionsAct = (token) => {
  console.log('');
  return (dispatch) => getQuestions(token).then((data) => dispatch(saveQuestAct(data)));
}; */

export const getTokenAct = () => (dispatch, callback) => getToken(callback)
  .then((data) => {
    dispatch(saveToken(data.token));
    setItemLocalStore('token', data.token);
    dispatch(getQuestionsAct(data.token));

    callback();
  })
  .catch(() => dispatch({ type: ERROR_TOKEN }));
