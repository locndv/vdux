import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate, resetErrorMessage, loadIPFSConfig } from '@nopomo/core';
import logo from './logo.svg';
import './App.css';

import TopicsPage from './containers/topics';

class App extends Component {
  componentWillMount() {
    this.props.loadIPFSConfig('QmTFwtqz4RFBZDFS6cZA6DYJyLWF9RsDmuMcD7DRg44L22');
  }

  render() {
    const { ipfs } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VGM Core</h1>
        </header>
        <TopicsPage />
        <pre>{JSON.stringify(ipfs, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ipfs: state.ipfs,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = {
  navigate,
  resetErrorMessage,
  loadIPFSConfig
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
