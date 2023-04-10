// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const FORM_REQUEST = 'FORM_REQUEST';
export const DELETE_REGISTER = 'DELETE_REGISTER';

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

export const formrequest = (payload, state) => ({
  type: FORM_REQUEST,
  payload: { ...state, exchangeRates: payload },
});
export const deleteRegister = (payload) => ({
  type: DELETE_REGISTER,
  payload,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const apiFetch = (state) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    delete currencies.USDT; // delete usdt
    dispatch(formrequest(currencies, state));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};

export const apiRequest = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    const array = Object.keys(currencies).filter((moedas) => moedas !== 'USDT');// TRANSFORMAR EM ARRAY (OBJECT.KEYS(CURRENCIES))
    dispatch(requestApi(array));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};
