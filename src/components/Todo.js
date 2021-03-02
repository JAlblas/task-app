import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
          };
      
    }

    render() {
        let { todo, editTodoWithId } = this.props;

        const editingTemplate = (<input type="text" value={todo.title} onChange={(e) => editTodoWithId(todo.id, e)}></input>);
        const normalTemplate = (<p>{todo.title}</p>)
        
        let editButton = <a className="todo-button" onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</a>
        let saveButton = <a className="todo-button" onClick={() => this.setState({isEditing: !this.state.isEditing})}>Save</a>

        return (
            <div className="todo-item">
                {this.state.isEditing ? editingTemplate : normalTemplate}
                <div className="buttons">
                    {this.state.isEditing ? saveButton : editButton}
                    <a className="todo-button" onClick={() => this.props.removeTodo(todo.id)}>Delete</a> 
                </div>
            </div>
        )
    }
}

export default Todo