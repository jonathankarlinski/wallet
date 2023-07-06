import { deleteButton, editButton,
  userWallet, saveNewWallet, saveWallet } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userWallet:
    return {
      ...state,
      currencies: action.payload,
    };
  case saveWallet:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      editor: false,
      idToEdit: 0,
    };
  case deleteButton:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => (
        Number(expense.id) !== Number(action.payload)
      )),
    };
  case editButton:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case saveNewWallet:
    return {
      ...state,
      expenses: action.payload,
      editor: false,
      idToEdit: 0,
    };
  default:
    return state;
  }
}

export default wallet;
