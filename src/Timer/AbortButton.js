import React from 'react'

class AbortButton extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.abortCountDown}>ABORT</button>
      </div>
    )
  }
}

export default AbortButton
