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
                {this.props.todos.map((todo, index) => {
                    return <Todo todo={todo} editTodoTitleAtIndex={this.props.editTodoTitleAtIndex} removeTodo={this.props.removeTodo} key={index}/>
                })}
            </div>
        )
    }
}

export default Overview