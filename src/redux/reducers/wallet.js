// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, FAILED_REQUEST, FORM_REQUEST,
  DELETE_REGISTER } from '../actions/index';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case REQUEST_API:
    return {
      ...state,
      currencies: payload,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: payload.error,
    };
  case FORM_REQUEST:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case DELETE_REGISTER:
    return {
      ...state,
      expenses: payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
