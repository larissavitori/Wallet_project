import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';
import logo from '../img/logoTrybeWallet.png';
import './Login.css';
import './button.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      isbutton: true,
    };
  }

  validarCampos = () => {
    const { email, senha } = this.state;
    const total = 6;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const validaEmail = emailRegex.test(email);
    const validarSenha = (senha.length) >= total;
    this.setState({
      isbutton: !(validarSenha && validaEmail),
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validarCampos());
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, isbutton } = this.state;
    return (
      <div className="main-container">
        <form className="login-container">
          <img
            src={ logo }
            alt="logo trybe "
            className="trybeImage"
          />
          <label htmlFor="email">
            <input
              data-testid="email-input"
              placeholder="Email"
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="number">
            <input
              data-testid="password-input"
              placeholder="senha"
              id="number"
              type="password"
              name="senha"
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="primary button"
            onClick={ this.handleClick }
            type="button"
            disabled={ isbutton }
          >
            entrar
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
