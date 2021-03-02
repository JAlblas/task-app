import React, { Component } from 'react'
import Todo from './Todo';

class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
          };
      
    }

    render() {
        return (
            <div id="list">
                {this.props.todos.map((todo) => {
                    return <Todo todo={todo} editTodoWithId={this.props.editTodoWithId} removeTodo={this.props.removeTodo} key={todo.id}/>
                })}
            </div>
        )
    }
}

export default Overview