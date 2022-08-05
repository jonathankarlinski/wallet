import { userWallet, userWalletDados, deleteButton } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userWallet:
    return {
      ...state,
      currencies: action.payload,
    };
  case userWalletDados:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case deleteButton:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => (
        Number(expense.id) !== Number(action.payload)
      )),
    };
  default:
    return state;
  }
}

export default wallet;
