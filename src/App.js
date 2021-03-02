import React, { Component } from "react";
import Overview from './components/Overview';

import { nanoid } from "nanoid";

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
    this.editTodoWithId = this.editTodoWithId.bind(this);
  }

  editTodoTitle(e) {
    this.setState({
      todo: e.target.value
    })
  }

  editTodoWithId(id, e) {
    const { todos } = this.state;

    const editedTaskList = todos.map(todo => {
      // if this task has the same ID as the edited task
        if (id === todo.id) {
          //
          return {...todo, title: e.target.value};
        }
        return todo;
    });

    this.setState({
      todos: editedTaskList
    })  
  }

  saveTodo(e) {    
    e.preventDefault();

    if (this.state.todo !== "")
    {
      this.setState({
        todo: "",
        todos: this.state.todos.concat({title: this.state.todo, id: nanoid()}),
        count: this.state.count + 1
      });
    } 

  }

  removeTodo(id) {
    let filteredTodos = this.state.todos.filter(function(todo){ 
        return todo.id !== id; 
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
          <h3>Number of tasks: {this.state.count}</h3>
          <form onSubmit={this.saveTodo}>
            <input type="text" value={todo} onChange={this.editTodoTitle} />
            <a className="button" onClick={this.saveTodo}>Create</a>
          </form>
        <Overview todos={todos} count={count} removeTodo={this.removeTodo} editTodoWithId={this.editTodoWithId}/>
      </div>
    );
  }
}

export default App;