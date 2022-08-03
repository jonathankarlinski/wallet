export const userForm = 'userForm';
export const userWallet = 'userWallet';
export const userWalletDados = 'userWalletDados';

export const actionsUser = (payload) => ({
  type: userForm,
  payload,
});

export const actionsWallet = (payload) => ({
  type: userWallet,
  payload,
});

export const actionsWalletDados = (payload) => ({
  type: userWalletDados,
  payload,
});

export const getCoins = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  const coins = Object.keys(data);
  dispatch(actionsWallet(coins));
};
