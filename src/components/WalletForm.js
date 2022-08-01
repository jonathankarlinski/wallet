import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      expenseAmount: '',
      description: '',
      method: 'Dinheiro',
      category: 'Alimentação',
    };
  }

  componentDidMount() {
    const { userGetCoins } = this.props;
    userGetCoins();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { expenseAmount, description, method, category } = this.state;
    const { userCoins } = this.props;
    return (
      <div>
        <h1>{userCoins}</h1>
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
        <label htmlFor="coins">
          test:
          <select
            type="select"
            name="coins"
            id="coins"
            data-testid="currency-input"
          >
            { userCoins.map((coin, index) => (
              <option
                key={ index }
                value={ coin }
              >
                {coin}
              </option>
            )) }
          </select>
        </label>
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

const mapStateToProps = (state) => ({
  userCoins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  userGetCoins: () => dispatch(getCoins()),
});

WalletForm.propTypes = {
  userCoins: PropTypes.array,
  getCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
