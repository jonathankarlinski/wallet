import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, userCoin } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`Email: ${userEmail}`}</p>
        <p>
          Despesa Total:
        </p>
        <p
          data-testid="total-field"
        >
          {
            userCoin.reduce((acc, curr) => (
              acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)),
            0).toFixed(2)
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userCoin: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string,
  userCoin: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps)(Header);
