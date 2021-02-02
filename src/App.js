import React, { Component } from "react";
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todos: [],
      count: 0
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
      todo: "",
      todos: this.state.todos.concat({title: this.state.todo, index: this.state.count}),
      count: this.state.count + 1
    });
  }

  render() {
    const { todo, todos, count } = this.state;

    return (
        <div>
          <form onSubmit={this.addTodo}>
            <input type="text" value={todo} onChange={this.saveTodo} />
            <input type="submit" value="Submit" />
          </form>
        <Overview todos={todos} count={count}/>
      </div>
    );
  }
}

export default App;