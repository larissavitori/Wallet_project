// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

function UserReducer(state = INITIAL_STATE, action) {
  // console.log(action.email?.email, 'oi');
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      email: action.email };
  default:
    return state;
  }
}

export default UserReducer;
