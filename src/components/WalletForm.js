import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins } from '../redux/actions';
import '../styles/components/WalletForm.css';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCoins());
  }

  render() {
    const {
      currencies,
      expenses,
      editor,
      value,
      description,
      method,
      tag,
      currency,
      getInfos,
      saveButton,
      editButton,
    } = this.props;
    return (
      <form className="walletForm-container-form">
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ getInfos }
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
            onChange={ getInfos }
          >
            {currencies.map((cur) => <option key={ cur } value={ cur }>{cur}</option>)}
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
            onChange={ getInfos }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            type="tag"
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ getInfos }
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
            onChange={ getInfos }
          />
        </label>
        <button
          type="button"
          data-testid="save-expense-button"
          disabled={ (!value || !description) }
          onClick={ () => {
            if (editor) {
              editButton();
            } else {
              saveButton(expenses);
            }
          } }
        >
          {editor ? 'Editar despesa' : 'Adicionar despesa'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  editor: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  getInfos: PropTypes.func.isRequired,
  saveButton: PropTypes.func.isRequired,
  editButton: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
