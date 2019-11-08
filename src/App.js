import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dash from './components/Dash'
import Header from './components/Header'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      inventory : 
      [{name: 'fred1', img: 'https://shortpixel.com/img/bighead.jpg', price: '$1'},
      {name: 'fred1', img: 'https://shortpixel.com/img/bighead.jpg', price: '$1'},
      {name: 'fred1', img: 'https://shortpixel.com/img/bighead.jpg', price: '$1'},]
    }

  }
  render() {
    return (
      <div className="App">
        <Header />
        App.js
      <Dash 
        inventory = {this.state.inventory}
          />
      </div>
    );
  }
}



