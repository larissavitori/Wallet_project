// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const FAILED_REQUEST = 'FAILED_REQUEST';

/* export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
}); */

export const addEmail = (payload) => ({
  type: ADD_EMAIL,
  payload,
});

export const requestApi = (payload) => ({
  type: REQUEST_API,
  payload,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST, payload: error,
});

export const apiRequest = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    const array = Object.keys(currencies);// TRANSFORMAR EM ARRAY (OBJECT.KEYS(CURRENCIES))
    const tirar = array.filter((moedas) => moedas !== 'USDT');// USDT NÃO PODE TRAZER
    console.log(tirar);
    dispatch(requestApi(tirar));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};
