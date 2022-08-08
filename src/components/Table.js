import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buttonDelete, buttonEdit } from '../redux/actions';

class Table extends Component {
  handleDelete = (event) => {
    const { id } = event.target;
    const { userbuttonDelete } = this.props;
    userbuttonDelete(id);
  }

  handleEdit = (event) => {
    const { id } = event.target;
    const { userbuttonEdit } = this.props;
    userbuttonEdit(id);
  }

  render() {
    const { userCoin } = this.props;
    console.log(userCoin);
    return (
      <div>
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
                <tr
                  key={ coin.id }
                >
                  <td>
                    {coin.description}
                  </td>
                  <td>
                    {coin.tag}
                  </td>
                  <td>
                    {coin.method}
                  </td>
                  <td>
                    {Number(coin.value).toFixed(2)}
                  </td>
                  <td>
                    {coin.exchangeRates[coin.currency].name}
                  </td>
                  <td>
                    {Number(coin.exchangeRates[coin.currency].ask).toFixed(2)}
                  </td>
                  <td>
                    {
                      (coin.exchangeRates[coin.currency]
                        .ask * Number(coin.value)).toFixed(2)
                    }
                  </td>
                  <td>
                    Real
                  </td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      onClick={ this.handleEdit }
                    >
                      Editar
                    </button>
                    <button
                      id={ coin.id }
                      type="button"
                      data-testid="delete-btn"
                      onClick={ this.handleDelete }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userCoin: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  userbuttonDelete: (payload) => dispatch(buttonDelete(payload)),
  userbuttonEdit: (payload) => dispatch(buttonEdit(payload)),

});

Table.propTypes = {
  userCoin: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
