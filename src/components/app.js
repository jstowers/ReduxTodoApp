import React, { Component } from 'react';

import AddTodo from '../containers/add_todo';

class App extends Component {
  render() {
    return (
      <div>
      	<h1>Todo App</h1>
      	<AddTodo />
  	  </div>
    );
  }
}

export default App;