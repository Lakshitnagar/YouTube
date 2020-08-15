import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="appHeader__logo">
          <img src={logo} alt={'logo'} height={20}/>
        </div>

        <div className="appHeader__search">
          Search
        </div>

        <div className="appHeader__account">
          accounts
        </div>
      </header>
    </div>
  );
}

export default App;
