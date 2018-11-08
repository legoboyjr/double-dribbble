import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
