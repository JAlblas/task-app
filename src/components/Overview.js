import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ul>
            {this.props.todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ul>
        )
    }
}

export default Overview