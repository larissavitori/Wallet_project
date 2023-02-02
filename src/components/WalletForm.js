import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiRequest } from '../redux/actions';

class WalletForm extends Component {
  state = {
    valor: '',
    descrição: '',
    moeda: 'UDS',
    metodo: 'Dinheiro',
    tag: 'alimentação',

  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(apiRequest());
  }

  render() {
    const { descrição, valor, tag, moeda, metodo } = this.state;
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
            value={ valor }
          />
        </label>
        <label htmlFor="descrição">
          Descrição da Despesa:
          <input
            data-testid="description-input"
            id="descrição"
            type="text"
            value={ descrição }
          />
        </label>
        <select
          name="moedas"
          data-testid="currency-input"
          value={ moeda }
        >
          {currencies.map((moedas) => (
            <option key={ moedas } value={ moedas }>
              {moedas}
            </option>
          ))}
        </select>
        <select id="moedas" name="moedas" data-testid="method-input" value={ metodo }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select id="moedas" name="moedas" data-testid="tag-input" value={ tag }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
