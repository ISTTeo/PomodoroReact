import React from 'react'

function TaskItem (props) {
  return(
    <div>
      Task:{props.item.name}
      Time Spent: {props.item.totalTime}
    </div>
  )
}

export default TaskItem
