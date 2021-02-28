import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
          };
      
    }

    render() {
        const editingTemplate = (<input type="text" value="New Name"></input>);
        const normalTemplate = (<p>NOT EDITING!</p>);
        return (
            <div>
                {this.state.isEditing ? editingTemplate : normalTemplate}
                <h3>Count: {this.props.count}</h3>
                <ul>
                    {this.props.todos.map((todo) => {
                        return <li key={todo.index}>{todo.title} - {todo.index}
                        <button onClick={() => this.props.removeTodo(todo.index)}>Delete</button>
                        <button onClick={() => this.setState({isEditing: !this.state.isEditing})}>Edit</button>
                        </li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default Overview