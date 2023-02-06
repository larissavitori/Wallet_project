import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRegister } from '../redux/actions';

class Table extends Component {
  // ajuda da fani e mateus t27.
  handleClick = (e) => {
    const { expenses, dispatch } = this.props;
    const NovoButton = expenses.filter((button) => button.id !== +e.target.id);
    dispatch(deleteRegister(NovoButton));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <td />
            <th>Tag</th>
            <td />
            <th>Método de pagamento</th>
            <td />
            <th>Valor</th>
            <td />
            <th>Moeda</th>
            <td />
            <th>Moeda de conversão</th>
            <td />
            <th>Câmbio utilizado</th>
            <td />
            <th>Valor convertido</th>
            <td />
            <th>Editar/Excluir</th>
            <td />
          </tr>
        </thead>
        <tbody>
          {expenses.map((despesa) => (
            <tr key={ despesa.id }>
              <td>
                {despesa.description}
              </td>
              <td>
                {despesa.tag}
              </td>
              <td>
                {despesa.method}
              </td>
              <td>
                {parseFloat(despesa.value).toFixed(2)}
              </td>
              <td>
                {despesa.exchangeRates[despesa.currency].name}
              </td>
              <td>
                {parseFloat(despesa.exchangeRates[despesa.currency].ask).toFixed(2)}
              </td>
              <td>
                {
                  (parseFloat(despesa.exchangeRates[despesa.currency].ask)
                  * parseFloat(despesa.value)).toFixed(2)
                }
              </td>
              <td>
                REAL
              </td>
              <td>
                <button
                  id={ despesa.id }
                  type="button"
                  data-testid="delete-btn"
                  onClick={ this.handleClick }
                >
                  DELETAR

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});
Table.propTypes = {
  dispatch: PropTypes.func,
  expenses: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps)(Table);
