import React from 'react'
import tasksData from './tasksData'
import TaskItem from './TaskItem'
import TaskInput from './TaskInput'
import TaskDisplay from './TaskDisplay'
import TimerApp from '../Timer/TimerApp'

class TaskApp extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: tasksData,
      currentTask: {}
    }
    this.selectTask = this.selectTask.bind(this)
    this.addTask = this.addTask.bind(this)
    this.addTime = this.addTime.bind(this)
  }

  addTask(value) {
    const allTasks = this.state.tasks
    console.log(allTasks)

    const lastTask = this.state.tasks.slice(-1)[0]
    const newId = lastTask.id + 1
    const newTask = {id: newId, name:value, totalTime:"0", sessions: [], todos: []}
    allTasks.push(newTask) 
    this.setState({tasks:allTasks})
  }

  selectTask(id){
    const allTodos = this.state.tasks
    const filtered = allTodos.filter(todo => todo.id === id)
    const task = filtered[0]
	  
    this.setState({currentTask: task}) 
  }

  addTime(taskid,time) {
  //TODO add session with finished or not finished
	  this.setState(prevState => {
		const updatedTasks = this.state.tasks.map (task => {
			if(task.id === taskid.id) {
				task.totalTime = task.totalTime + time
			} 
			return task
		})
		return {
			tasks: updatedTasks
		}
	})
  }

  render() {
    const taskItems = this.state.tasks.map(item =>
      <TaskItem
        key={item.id}
        item={item}
	selectTask={this.selectTask}
      />
    )
    return(
      <div>	
	<TaskDisplay task={this.state.currentTask}/>
        <TaskInput addTask={this.addTask} />
        {taskItems}
	<TimerApp task={this.state.currentTask} addTime={this.addTime}/>
      </div>
    )
  }
}

export default TaskApp
