import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';

test('Teste se a página contém as informações', () => {
  renderWithRouterAndRedux(<App />);
  const text1 = screen.getByText(/Hello, TrybeWallet!/i);
  expect(text1).toBeInTheDocument();
  const text2 = screen.getByText(/Tela De Login/i);
  expect(text2).toBeInTheDocument();
  screen.queryAllByRole('button');
});

test('teste se o input recebe o email', () => {
  renderWithRouterAndRedux(<Login />);
  const inputElem = screen.getByRole('textbox', {
    name: /email:/i,
  });

  fireEvent.change(inputElem, { target: { value: 'userla@gmail.com' } });

  expect(inputElem).toHaveValue('userla@gmail.com');
  const button = screen.getAllByRole('button', { name: /entrar/i });
  expect(button).toBeDefined();
});

test(' teste se o botão é clicado quando digitar email e senha', () => {
  const { history } = renderWithRouterAndRedux(<Login />);

  const inputElem = screen.getByRole('textbox', {
    name: /email:/i,
  });

  userEvent.type(inputElem, 'user@gmail.com');
  const inputSenha = screen.getByLabelText(/password:/i);
  userEvent.type(inputSenha, 12345678);
  const buttonElem = screen.getByRole('button', { name: /entrar/i });
  userEvent.click(buttonElem);

  const carteira = '/carteira';
  act(() => {
    history.push(carteira);
  });
});
