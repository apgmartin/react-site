import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header className="col-xs-12 col-md-7"/>
        <img src={require('./IMG_1152.jpg')} alt="home page" className="App-image col-xs-12 col-md-5"></img>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
