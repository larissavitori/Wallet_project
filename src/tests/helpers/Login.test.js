import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
// import Login from '../../pages/Login';
import App from '../../App';

test('Teste se a página contém as informações', () => {
  renderWithRouterAndRedux(<App />);
  const text1 = screen.getByText(/Hello, TrybeWallet!/i);
  expect(text1).toBeInTheDocument();
  const text2 = screen.getByText(/Tela De Login/i);
  expect(text2).toBeInTheDocument();
  screen.queryAllByRole('button');
});
