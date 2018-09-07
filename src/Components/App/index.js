import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';
import 'whatwg-fetch';
import Series from '../containers/series';



class App extends Component {
  constructor(props){
    super(props);
    
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Tv Series App</h1>
        </header>
        <Intro message="Here you can fil all most sereis" />
        
        <Series />
      </div>
    );
  }
}

export default App;
