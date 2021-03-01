import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
          };
      
    }

    render() {
        let { todo, key, editTodoTitleAtIndex } = this.props;

        const editingTemplate = (<input type="text" value={todo.title} onChange={(e) => editTodoTitleAtIndex(key, e)}></input>);
        const normalTemplate = (<p>{todo.title}</p>)
        
        return (
            <div className="todo-item">
                {this.state.isEditing ? editingTemplate : normalTemplate}
                <div className="buttons">
                    <a class="todo-button" onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</a>
                    <a class="todo-button" onClick={() => this.props.removeTodo(todo.index)}>Delete</a> 
                </div>
            </div>
        )
    }
}

export default Todo