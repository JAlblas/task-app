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
                    return <Todo todo={todo}/>
                })}
            </div>
        )
    }
}

export default Overview