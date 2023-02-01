import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hearder from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email, total = 0, moeda = 'BRL' } = this.props;
    return (
      <section>
        <div>TrybeWallet</div>
        <Hearder />
        <div data-testid="email-field">
          email:
          { email }
        </div>
        <div data-testid="total-field">
          despesa tota:
          { total }
        </div>
        <div data-testid="header-currency-field">
          Moeda:
          { moeda }
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  moeda: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
