import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithRouterAndRedux} from './renderWith';
import App from '../../App';
import Login from '../../pages/Login';
import Wallet from '../../pages/Wallet';

describe('Teste tela de login', () => {
  test('se é renderizado todas as informações', () => {
    renderWithRouterAndRedux(<Login />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByRole('button', /Entrar/i)).toBeInTheDocument();
  });
  test('se ao clicar no botão é renderizado a pagina wallet', () => {
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
  
});
describe('Teste tela de wallet', () => {
  test('se é renderizado todas as informações de header', () => {
    renderWithRouterAndRedux(<Wallet />);
    expect(screen.getByTestId('email-field')).toBeInTheDocument();
    expect(screen.getByText(/Despesa Total/i)).toBeInTheDocument();
    expect(screen.getByTestId('total-field')).toBeInTheDocument();
    expect(screen.getByTestId('header-currency-field')).toBeInTheDocument();
  });
  test('se é renderizado todas as informações de walletForm', () => {
    renderWithRouterAndRedux(<Wallet />);
    expect(screen.getByTestId('value-input')).toBeInTheDocument();
    expect(screen.getByTestId('currency-input')).toBeInTheDocument();
    expect(screen.getByTestId('method-input')).toBeInTheDocument();
    expect(screen.getByTestId('tag-input')).toBeInTheDocument();
    expect(screen.getByTestId('description-input')).toBeInTheDocument();
    expect(screen.getByRole('button', /Adicionar despesa/i)).toBeInTheDocument();
  });
  test('se é renderizado todas as informações de table', () => {
    renderWithRouterAndRedux(<Wallet />);
    expect(screen.getByText(/Tag/i)).toBeInTheDocument();
    expect(screen.getByText(/Método de pagamento/i)).toBeInTheDocument();
    expect(screen.getByText(/Câmbio utilizado/i)).toBeInTheDocument();
    expect(screen.getByText(/Valor convertido/i)).toBeInTheDocument();
    expect(screen.getByText(/Moeda de conversão/i)).toBeInTheDocument();
    expect(screen.getByText(/Editar/i)).toBeInTheDocument();
    expect(screen.getByText(/Excluir/i)).toBeInTheDocument();
  });
  test('se é renderizado todas as informações de table', () => {
    renderWithRouterAndRedux(<Wallet />);
    const description = screen.getByTestId('description-input');
    const value = screen.getByTestId('value-input');

    userEvent.type(description, 'pc gamer');
    userEvent.type(value, '1000');

    const button = screen.getByRole('button', /Adicionar despesa/i);
    userEvent.click(button);
    // expect(screen.getByText(/pc gamer/i)).toBeInTheDocument();
    // expect(screen.getByText(/1000/i)).toBeInTheDocument();

  });
});