import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import { saveCoins, editedExpense } from '../redux/actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  };

  clean = () => {
    this.setState({
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    });
  };

  saveExpense = (expenses) => {
    const { dispatch } = this.props;
    const result = { id: expenses.length };
    Object.assign(result, this.state);
    dispatch(saveCoins(result));
    this.clean();
  };

  editExpense = (idToEdit) => {
    const { expenses } = this.props;
    const result = expenses.find(({ id }) => id === idToEdit);
    const { value, description, method, tag, currency } = result;
    this.setState({
      value,
      description,
      method,
      tag,
      currency,
    });
  };

  newWallet = () => {
    const { dispatch, idToEdit, expenses } = this.props;
    const { value, description, method, tag, currency } = this.state;

    const index = expenses.findIndex((expense) => expense.id === idToEdit);
    const result = [...expenses];
    result[index].value = value;
    result[index].description = description;
    result[index].method = method;
    result[index].tag = tag;
    result[index].currency = currency;

    dispatch(editedExpense(result));
    this.clean();
  };

  render() {
    const { value, description, method, tag, currency } = this.state;
    return (
      <div>
        <Header />
        <WalletForm
          value={ value }
          description={ description }
          method={ method }
          tag={ tag }
          currency={ currency }
          getInfos={ this.handleChange }
          saveButton={ this.saveExpense }
          editButton={ this.newWallet }
        />
        <Table
          editButton={ this.editExpense }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  idToEdit: state.wallet.idToEdit,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Wallet);
