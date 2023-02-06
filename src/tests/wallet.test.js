import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux, renderWithRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import WalletForm from '../components/WalletForm';
import reducers from '../redux/reducers';
import Header from '../components/Header';

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

test('teste as actions', () => {
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

test('teste os inputs', async () => {
  const { getByTestId } = renderWithRedux(<WalletForm />);

  const inputElem = screen.getByRole('spinbutton', {
    name: /valor da despesa:/i,
  });
  fireEvent.click(inputElem, { target: { value: 12 } });
  expect(inputElem).toHaveValue(12);

  const DescriçãoDespesa = screen.getByRole('textbox', {
    name: /descrição da despesa:/i,
  });
  userEvent.type(DescriçãoDespesa, 'maça');
  const tag = (screen.getByRole('option', { name: 'Dinheiro' }).selected);
  screen.findAllByTestId('tag-input');

  const buttonAdicionar = screen.getByRole('button', {
    name: /adicionar despesa/i,
  });
  userEvent.click(buttonAdicionar);
  await waitFor(() => {
    expect(inputElem).toBeInTheDocument(12);
    expect(DescriçãoDespesa).toBeInTheDocument('maça');
    expect(tag).toBe(true);
    const buttonExcluir = getByTestId('delete-btn');
    userEvent.click(buttonExcluir);
  });
});
test('teste a table ', () => {
  renderWithRouterAndRedux(<WalletForm />);

  const tableMoeda = screen.getByRole('columnheader', {
    name: /moeda de conversão/i,
  });
  expect(tableMoeda).toBeInTheDocument();
});
test('teste se o email aparece ', () => {
  renderWithRouterAndRedux(<Header />);

  const email = screen.getByTestId('email-field');
  expect(email).toBeInTheDocument();
});
