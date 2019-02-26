import React from 'react'

function TaskDisplay(props) {
    return(
    	<div>
		<h1>Current Task: {props.task.name}</h1>
	</div>
    )
}

export default TaskDisplay
