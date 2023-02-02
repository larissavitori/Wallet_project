import React from 'react';
import { connect } from 'react-redux';
import Hearder from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Hearder />
        <WalletForm />
      </section>
    );
  }
}

export default connect()(Wallet);
