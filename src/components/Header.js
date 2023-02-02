import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total = 0, moeda = 'BRL' } = this.props;
    return (
      <section>
        <div>Header</div>
        <div data-testid="email-field">
          email:
          { email }
        </div>
        <div data-testid="total-field">
          despesa total:
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

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  moeda: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
