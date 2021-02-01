import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ul>
            {this.props.todos.map((todo) => {
              return <li>{todo}</li>;
            })}
          </ul>
        )
    }
}

export default Overview