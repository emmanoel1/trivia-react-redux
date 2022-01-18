import { SAVE_TOKEN } from '../actions';

const initialState = '';

const token = (state = initialState, { type, payload }) => {
  const cases = {
    [SAVE_TOKEN]: payload,
  };
  if (cases[type]) return cases[type];
  return state;
};

export default token;
