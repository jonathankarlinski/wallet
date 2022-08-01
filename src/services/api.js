const getCoins = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJson = await response.json();
  return responseJson;
};
export default getCoins;
