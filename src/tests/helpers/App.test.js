import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';
import Wallet from '../../pages/Wallet';

test('Teste tela de login', () => {
  const { history } = renderWithRouterAndRedux(<App />);

  const email = screen.getByTestId('email-input');
  const senha = screen.getByTestId('password-input');
  const button = screen.getByRole('button', /Entrar/i)

  expect(button).toHaveAttribute("disabled");
  userEvent.type(email, 'teste@gmail.com');
  userEvent.type(senha, '777777777777777');
  expect(button).not.toHaveAttribute("disabled");

  userEvent.click(button);
  expect(history.location.pathname).toBe('/carteira');
});
test('Teste tela de wallet', async () => {
  renderWithRouterAndRedux(<Wallet />);
  const value = screen.getByTestId('value-input');
  const description = screen.getByTestId('description-input');
  const buttonSave = screen.getByTestId('save-expense-button');

  expect(value).toBeInTheDocument();
  expect(description).toBeInTheDocument();

  userEvent.type(value, '265');
  userEvent.type(description, 'compra');
  userEvent.click(buttonSave);

  const buttonDelete = await screen.findByTestId('delete-btn');
  const buttonEdit = await screen.findByTestId('edit-btn');

  expect(buttonDelete).toBeInTheDocument();
  expect(buttonEdit).toBeInTheDocument();

  userEvent.click(buttonEdit);
  userEvent.type(description, 'compras');
  userEvent.click(buttonSave);

  userEvent.click(buttonDelete);
  expect(buttonEdit).not.toBeInTheDocument();
});