// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const LOGIN = 'LOGIN';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});
export const login = (value) => ({ type: LOGIN, value });
