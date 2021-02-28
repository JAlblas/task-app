import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
          };
      
    }

    render() {
        let { todo } = this.props;
        const editingTemplate = (<input type="text" value={todo.title}></input>);
        const normalTemplate = (<div>{todo.title}</div>);
        return (
            <div>
                {this.state.isEditing ? editingTemplate : normalTemplate}
                    <a class="todo-button" onClick={() => this.props.removeTodo(todo.index)}>Delete</a>
                    <a class="todo-button" onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</a>
            </div>
        )
    }
}

export default Todo