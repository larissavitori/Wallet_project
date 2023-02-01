import { combineReducers } from 'redux';
import UserReducer from './user';
import walletReducer from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducers = combineReducers({
  user: UserReducer,
  wallet: walletReducer,
});

export default rootReducers;
