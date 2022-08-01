export const userForm = 'userForm';
export const userWallet = 'userWallet';

export const actionsUser = (payload) => ({
  type: userForm,
  payload,
});

export const actionsWallet = (payload) => ({
  type: userWallet,
  payload,
});

export const getCoins = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const teste = Object.keys(data).filter((key) => key !== 'USDT');
  dispatch(actionsWallet(teste));
};
