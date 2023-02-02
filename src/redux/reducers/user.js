// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

function UserReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case ADD_EMAIL:
    return {
      email: payload,
    };
  default:
    return state;
  }
}

export default UserReducer;
