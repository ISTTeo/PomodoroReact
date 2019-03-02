import React from 'react'

function TaskItem (props) {
  return(
    <div>
      <p>
      <a onClick={()=> props.selectTask(props.item.id)}><b>{props.item.name}</b></a> >>{props.item.totalTime} min
      </p>
    </div>
  )
}

export default TaskItem
