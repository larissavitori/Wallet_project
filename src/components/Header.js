import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const soma = expenses.reduce((acc, despesa) => (
      acc + (Number(despesa.value)
       * Number(despesa.exchangeRates[despesa.currency]
         .ask))
    ), 0);
    return (
      <section>
        <div>Header</div>
        <div data-testid="email-field">
          email:
          { email }
        </div>
        <p>despesa total:</p>
        <div data-testid="total-field">
          { soma.toFixed(2)}
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
