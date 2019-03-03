import React from 'react'

class TimerInput extends React.Component {

  render() {
    return (
      <div>
        <h3>How long will this take?</h3>
        <input type="number" onChange={this.props.handleChange}required min="0" />

      </div>
    )
  }
}

export default TimerInput
