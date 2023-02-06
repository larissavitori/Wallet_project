import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  resultHeader = () => {
    const { expenses } = this.props;
    const soma = expenses.reduce(
      (acc, despesa) => {
        const result = parseFloat(acc) + (Number(despesa.value)
        * Number(despesa.exchangeRates[despesa.currency].ask));
        return result.toFixed(2);
      },
      '0.00',
    );
    return soma;
  };

  render() {
    const { email } = this.props;
    return (
      <section>
        <div>Header</div>
        <div data-testid="email-field">
          email:
          { email }
        </div>
        <p>despesa total:</p>
        <div data-testid="total-field">
          { this.resultHeader() }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </section>
    );
  }
}
const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Header);
