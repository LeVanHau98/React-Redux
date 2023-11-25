import React from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../constants/appRouter'

const Task = (props) => {
  const {title, creator, status, description} = props.task

  //Chức năng chuyển hướng màn hình sang edit khi nhấn title
  const navigate = useNavigate()

  
  const handleRedirectToDetailPage = () => {
     const taskID = props.task.id
     navigate(generatePath(APP_ROUTER.UPDATE_TASK,{ id: taskID}))

  }


  return (
    <div className='task-container'>
      <div className='task-container_title' style={{cursor:'pointer'}} onClick={handleRedirectToDetailPage}>Title:{title}</div>
      <div className='task-container_author'>Create:{creator} </div>
      <div className='task-container_status'>Status:{status} </div>
      <div className='task-container_divider'></div>
      <div className='task-container_description'>
            <div className='task-container_des-title'>Description</div>
            <div className='task-container_des-content'>{description}</div>
      </div>

      
    </div>
  )
}

export default Task;

