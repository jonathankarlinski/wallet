import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h3 data-testid="email-field">{`Email: ${userEmail}`}</h3>
        <h3 data-testid="total-field">Despesa Total: 0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
