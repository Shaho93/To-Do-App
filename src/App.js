import logo from './logo.svg';
import './App.css';
import Todolist from './Components/TodoList'; 
import React from 'react';

let todos = [
  ("Homework"), ("Clean My Room")
]

class App extends React.Component{

  render(){
      let todos = []
      
    return(
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to your To-Do-List</h1>
        </header> */}
        
        <Todolist />
      </div>
    )
  }
}

export default App;
