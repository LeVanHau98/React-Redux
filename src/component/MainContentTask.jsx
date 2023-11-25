import React from 'react'
import '../App.scss';
import Task from './Task';

const MainContentTask = (props) => {

  const renderTasks = (tasks) => {
     return tasks.map( task => {
       return <Task key={task.id} task={task} />
     }
      )
  }
 


  return (
    <div className='main-content-task'>
       {renderTasks(props.tasks)}  
    </div>
  )
}

export default MainContentTask
