import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import FullPageView from './layouts/FullPageView';


class App extends Component {
  render() {
    return (
      <FullPageView>
        <Header />
        <Main />
      </FullPageView>
    );
  }
}

export default App;
