import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dash from './components/Dash'
import Header from './components/Header'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {

    }

  }
  render() {
    return (
      <div className="App">
        <Header />
        App.js
      <Dash />
      </div>
    );
  }
}



