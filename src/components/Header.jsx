import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../img/logoTrybeWallet.png';
import logoEmail from '../img/emaill.png';
import moeda from '../img/moeda.png';
import './Header.css';

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
      <header>
        <div className="header-container">
          <div className="header-wrapper">
            <img
              src={ logo }
              alt="logo trybe "
              className="imageheader"
            />
            <img
              src={ moeda }
              alt="moeda logo"
            />
            <div data-testid="total-field">
              Total de despesa:
              { this.resultHeader() }
            </div>
            <div data-testid="header-currency-field">
              BRL
            </div>
            <img
              src={ logoEmail }
              alt="logo email "
            />
            <div data-testid="email-field">
              email:
              { email }
            </div>
          </div>
        </div>
      </header>
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
