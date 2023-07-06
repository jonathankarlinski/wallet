import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionsUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = () => {
    const { userDispatch, history } = this.props;
    userDispatch({ ...this.state });
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    const passwordMin = 6;
    return (
      <div>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            id="email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            id="password"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
          disabled={ !/\S+@\S+\.\S+/.test(email) || password.length < passwordMin }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (payload) => dispatch(actionsUser(payload)),
});

Login.propTypes = {
  userDispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
