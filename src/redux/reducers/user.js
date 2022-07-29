import { userForm } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userForm:
    return action.payload;
  default:
    return state;
  }
}

export default user;
