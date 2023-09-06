import { userForm } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  if (action.type === userForm) {
    return action.payload;
  }
  return state;
}

export default user;
