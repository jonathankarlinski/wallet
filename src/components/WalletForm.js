import React, { Component } from 'react';

export default class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      expenseAmount: '',
      description: '',
      method: 'Dinheiro',
      category: 'Alimentação',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { expenseAmount, description, method, category } = this.state;
    return (
      <div>
        <label htmlFor="expenseAmount">
          <input
            data-testid="value-input"
            type="number"
            id="expenseAmount"
            name="expenseAmount"
            value={ expenseAmount }
            onChange={ this.handleChange }
          />
        </label>
        {/* <select data-testid="currency-input">
          <option></option>
        </select> */}
        <label htmlFor="method">
          <select
            type="select"
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          <select
            type="select"
            name="category"
            id="category"
            data-testid="tag-input"
            value={ category }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          <input
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}
