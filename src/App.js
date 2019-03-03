import React, { Component } from 'react';
import logo from './logo.svg';
import TimerApp from './Timer/TimerApp'
import TaskApp from './Tasks/TaskApp'
class App extends Component {


  render() {
    return (
      <div className="App">
        <TaskApp />
        
      </div>
    );
  }
}

export default App;
