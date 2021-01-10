import React, { Component } from 'react';
import './App.css'
import MainComponent from './Components/MainComponent'
class App extends Component {
  render() {
    return (
      <div className='search'>
        <MainComponent />
      </div>
    );
  }
}

export default App;