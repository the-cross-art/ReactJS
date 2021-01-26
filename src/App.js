import React, { Component } from 'react';
// import logo from './logo.svg';
import CoinContainer from './CoinContainer';
import './App.css';
// import Clicker from './Clicker';

class App extends Component {
  render(){
    return (
      <div className="App">
        <CoinContainer />
      </div>
    );
  };
}

export default App;
