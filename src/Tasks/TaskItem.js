import React from 'react'

function TaskItem (props) {
  return(
    <div>
      <p>
      <a onClick={()=> props.selectTask(props.item.id)}>Task:{props.item.name}</a>
      Time Spent: {props.item.totalTime}
      </p>
    </div>
  )
}

export default TaskItem
