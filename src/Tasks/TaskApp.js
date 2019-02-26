import React from 'react'
import tasksData from './tasksData'
import TaskItem from './TaskItem'
import TaskInput from './TaskInput'
class TaskApp extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: tasksData
    }
  }
  render() {
    const taskItems = this.state.tasks.map(item =>
      <TaskItem
        key={item.id}
        item={item}
      />
    )
    return(
      <div>
        <TaskInput />
        {taskItems}
      </div>
    )
  }
}

export default TaskApp
