import { SAVE_GRAVATAR, SAVE_RANK } from '../actions';

const ADD_PLAYER = 'ADD_PLAYER';
const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  gravatarImg: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PLAYER:
    return {
      ...state,
      ...action.payload,
    };
  case SAVE_GRAVATAR:
    return {
      ...state,
      gravatarImg: action.payload,
    };
  case SAVE_RANK:
    return {
      ...state,
      score: state.score + action.payload,
      assertions: (action.payload === 0) ? state.assertions : state.assertions + 1,
    };
  default:
    return state;
  }
};

export default player;
