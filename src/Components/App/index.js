import React, { Component } from 'react';
import Main from '../main/index'
import './App.css';
import 'whatwg-fetch';



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
       
        
        <Main />
      </div>
    );
  }
}

export default App;

