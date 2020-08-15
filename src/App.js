import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} alt={'logo'} height={20}/>
        </div>

        <div>
          Search
        </div>

        <div>
          accounts
        </div>
      </header>
    </div>
  );
}

export default App;
