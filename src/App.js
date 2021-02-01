import React, { Component } from "react";
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    console.log("Adding todo!");
    console.log(e.target.value);
    this.setState({
      todos: this.state.todos.concat(e.target.value),
    });
  }

  render() {
    return (
      <div>
        <input type="text" value="Task name" />
        <input type="submit" value="Submit" onClick={this.addTodo}/>
        <Overview todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;