import { userWallet } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userWallet:
    return {
      currencies: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
