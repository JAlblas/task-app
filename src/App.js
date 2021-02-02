import React, { Component } from "react";
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  saveTodo(e) {
    this.setState({
      todo: e.target.value
    })
  }

  addTodo(e) {    
    e.preventDefault();
    this.setState({
      todos: this.state.todos.concat(this.state.todo),
    });
  }

  render() {
    return (
        <div>
          <form onSubmit={this.addTodo}>
            <input type="text" value={this.state.todo} onChange={this.saveTodo} />
            <input type="submit" value="Submit" />
          </form>
        <Overview todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;