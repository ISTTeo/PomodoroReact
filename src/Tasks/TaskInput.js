import React from 'react'

class TaskInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.addTask(this.input.value)
  }

  render() {
    return (
      <div>
        <h2> Tasks </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref= {(input) => this.input = input} />
        </form>
      </div>
    )
  }
}

export default TaskInput
