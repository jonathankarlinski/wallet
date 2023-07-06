export const userForm = 'userForm';
export const userWallet = 'userWallet';
export const userWalletDados = 'userWalletDados';
export const deleteButton = 'deleteButton';
export const editButton = 'editButton';
export const saveWallet = 'saveWallet';
export const saveNewWallet = 'saveNewWallet';

export const actionsUser = (payload) => ({
  type: userForm,
  payload,
});

export const actionsWallet = (payload) => ({
  type: userWallet,
  payload,
});

export function getCoins() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    const coins = Object.keys(data);
    dispatch(actionsWallet(coins));
  };
}

const saveWallets = (obj, data) => ({
  type: saveWallet,
  payload: { ...data, exchangeRates: obj },
});

export function saveCoins(data) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    delete data.USDT;
    return dispatch(saveWallets(json, data));
  };
}

export const buttonDelete = (id) => ({
  type: deleteButton,
  payload: id,
});

export const buttonEdit = (id) => ({
  type: editButton,
  payload: id,
});

export const editedExpense = (payload) => ({
  type: saveNewWallet,
  payload,
});
