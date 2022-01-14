const ADD_PLAYER = 'ADD_PLAYER';
const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PLAYER:
    return {
      ...state,
      name: action.payload,
      gravatarEmail: action.payload,
    };
  default:
    return state;
  }
};

export default playerReducer;
