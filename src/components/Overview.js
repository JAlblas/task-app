import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Count: {this.props.count}</h3>
                <ul>
                    {this.props.todos.map((todo) => {
                        return <li key={todo.index}>{todo.title} - {todo.index}
                        <button onClick={() => this.props.removeTodo(todo.index)}>Delete</button>
                        </li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default Overview