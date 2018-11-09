import React from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import FullPageView from './layouts/FullPageView';


function App(props) {
  return (
    <FullPageView>
      <Header />
      <Main />
    </FullPageView>
  );
}

export default App;
