import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
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
                <button type="button">EDITAR</button>
                <button type="button" data-testid="delete-btn">DELETAR</button>
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
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Table);
