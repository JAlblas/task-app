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

    this.editTodoTitle = this.editTodoTitle.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  editTodoTitle(e) {
    this.setState({
      todo: e.target.value
    })
  }

  saveTodo(e) {    
    e.preventDefault();
    this.setState({
      todo: "",
      todos: this.state.todos.concat({title: this.state.todo, index: this.state.count}),
      count: this.state.count + 1
    });
  }

  removeTodo(id) {
    let filteredTodos = this.state.todos.filter(function(todo){ 
      console.log(id);
      console.log(todo.index);
        return todo.index !== id; 
    });
    this.setState({
      todos: filteredTodos,
      count: this.state.todos.length - 1
    });
  }

  render() {
    const { todo, todos, count } = this.state;

    return (
        <div>
          <form onSubmit={this.saveTodo}>
            <input type="text" value={todo} onChange={this.editTodoTitle} />
            <input type="submit" value="Create" />
          </form>
        <Overview todos={todos} count={count} removeTodo={this.removeTodo} editTodo={this.editTodo}/>
      </div>
    );
  }
}

export default App;