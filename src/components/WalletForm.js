import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins, actionsWalletDados } from '../redux/actions';

const alimentacao = 'Alimentação';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      exchangeRates: [],
    };
  }

  componentDidMount() {
    const { userGetCoins } = this.props;
    userGetCoins();
  }

  getApi = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    return data;
  };

  handleSubmit = async () => {
    const { userWallet } = this.props;
    this.setState({ exchangeRates: await this.getApi() });
    userWallet(this.state);
    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { value, description, method, tag, currency } = this.state;
    const { userCoins } = this.props;
    return (
      <div>
        <h1>{userCoins}</h1>
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            type="select"
            name="currency"
            id="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }

          >
            { userCoins.map((coin, index) => (
              <option
                key={ index }
              >
                {coin}
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Tipo de Pagamento:
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
        <label htmlFor="tag">
          <select
            type="tag"
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
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
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            Adicionar despesa
          </button>
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
  userWallet: (payload) => dispatch(actionsWalletDados(payload)),
});

WalletForm.propTypes = {
  userCoins: PropTypes.array,
  getCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
