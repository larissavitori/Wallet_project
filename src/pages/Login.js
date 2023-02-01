import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

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
      <section>
        <div> Tela De Login</div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="number">
            password:
            <input
              data-testid="password-input"
              id="number"
              type="password"
              name="senha"
              onChange={ this.handleChange }
            />
          </label>
          <button
            onClick={ this.handleClick }
            type="button"
            disabled={ isbutton }
          >
            entrar
          </button>
        </form>
      </section>
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
