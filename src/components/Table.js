import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buttonDelete, buttonEdit } from '../redux/actions';

class Table extends Component {
  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(buttonDelete(id));
  };

  handleEdit = (id) => {
    const { dispatch, editButton } = this.props;
    dispatch(buttonEdit(id));
    editButton(id);
  };

  render() {
    const { userCoin } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            userCoin.map((coin) => (
              <tr key={ coin.id }>
                <td>{coin.description}</td>
                <td>{coin.tag}</td>
                <td>{coin.method}</td>
                <td>{Number(coin.value).toFixed(2)}</td>
                <td>{coin.exchangeRates[coin.currency].name}</td>
                <td>
                  {Number(coin.exchangeRates[coin.currency].ask)
                    .toFixed(2)}
                </td>
                <td>
                  {
                    (coin.exchangeRates[coin.currency]
                      .ask * Number(coin.value)).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => {
                      this.handleDelete(coin.id);
                    } }
                  >
                    Excluir
                  </button>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => {
                      this.handleEdit(coin.id);
                    } }
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  userCoin: state.wallet.expenses,
});

Table.propTypes = {
  userCoin: PropTypes.arrayOf(PropTypes.shape).isRequired,
  dispatch: PropTypes.func.isRequired,
  editButton: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
