import { USER_WALLET } from '../actions';

const INITIAL_STATE = {

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_WALLET:
    return {};
  default:
    return state;
  }
}

export default wallet;
