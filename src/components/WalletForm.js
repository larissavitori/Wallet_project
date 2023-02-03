import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiRequest, apiFetch } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};
class WalletForm extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(apiRequest());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // ajuda na monitoria e breno t 27 b
  handleClick = (e) => {
    e.preventDefault();
    const { id } = this.state;
    const { dispatch } = this.props;
    dispatch(apiFetch(this.state));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  };

  render() {
    const { description, value, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <div>WalletForm</div>
        <label htmlFor="valorDespesa">
          Valor Da Despesa:
          <input
            data-testid="value-input"
            id="valorDespesa"
            type="number"
            value={ value }
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrição">
          Descrição da Despesa:
          <input
            data-testid="description-input"
            id="descrição"
            type="text"
            value={ description }
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <select
          data-testid="currency-input"
          value={ currency }
          name="currency"
          onChange={ this.handleChange }
        >
          {currencies.map((moedas) => (
            <option key={ moedas } value={ moedas }>
              {moedas}
            </option>
          ))}
        </select>
        <select
          id="moedas"
          data-testid="method-input"
          value={ method }
          name="method"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          id="moedas"
          name="tag"
          data-testid="tag-input"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape()),
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
