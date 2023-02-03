import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux, renderWithRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import WalletForm from '../components/WalletForm';
import reducers from '../redux/reducers';

test('Teste se a página contém as informações', () => {
  renderWithRouterAndRedux(<Wallet />);
  const text1 = screen.getByText(/Header/i);
  expect(text1).toBeInTheDocument();
  const text2 = screen.getByText(/email/i);
  expect(text2).toBeInTheDocument();
  screen.queryAllByRole('button');
  const buttonre = screen.queryAllByRole('button');
  expect(buttonre.length).toBe(1);
});
test('Teste se a página contém as informações', async () => {
  renderWithRouterAndRedux(<WalletForm />);
  const button = screen.queryAllByRole('button');
  expect(button.length).toBe(1);
});

test('test as actions', () => {
  const initialState = {
    user: { email: 'larytea@gmail.com' },
  };
  renderWithRedux(<WalletForm />, { initialState });

  expect(screen.queryByText('larytera@gmail.com')).not.toBeInTheDocument();
});
test('reducers', () => {
  const state = reducers({ user: { email: 'laryterra@gmail.com' }, wallet: { currencies: [], expenses: [], editor: false, idToEdit: 0 } }, { type: 'REQUEST_API', payload: ['USD', 'CAD', 'GBP', 'ARS', 'BTC', 'LTC', 'EUR', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP', 'DOGE'] });
  expect(state).toEqual({ user: { email: 'laryterra@gmail.com' }, wallet: { currencies: ['USD', 'CAD', 'GBP', 'ARS', 'BTC', 'LTC', 'EUR', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP', 'DOGE'], expenses: [], editor: false, idToEdit: 0 } });
});

test('test os inputs', () => {
  renderWithRedux(<WalletForm />);

  const inputElem = screen.getByRole('spinbutton', {
    name: /valor da despesa:/i,
  });
  fireEvent.change(inputElem, { target: { value: 12 } });
  expect(inputElem).toHaveValue(12);
});
