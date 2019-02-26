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
    this.addTask = this.addTask.bind(this)
  }

  addTask(value) {
    const allTasks = this.state.tasks
    console.log(allTasks)

    const lastTask = this.state.tasks.slice(-1)[0]
    const newId = lastTask.id + 1
    const newTask = {id: newId, name:value, totalTime:"0", sessions: [], todos: []}
    allTasks.push(newTask)
    console.log(allTasks)
    this.setState({todos:allTasks})
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
        <TaskInput addTask={this.addTask} />
        {taskItems}
      </div>
    )
  }
}

export default TaskApp
