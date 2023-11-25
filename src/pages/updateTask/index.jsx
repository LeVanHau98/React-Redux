import React, { useEffect } from 'react'
import TaskForm from '../../component/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actFetchTaskById } from '../../redux/feature/tasks/taskSlice';

const UpdateTask = () => {

  const task = useSelector( state => state.task.currentTask) // Lay du lieu task hien tai
  const dispatch = useDispatch()
  const params = useParams()

  useEffect( () => {
    dispatch(actFetchTaskById(params.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[params])
  return (
    <div>
       <TaskForm isEdit={true} currentTask= {task}/>
      
    </div>
  )
}

export default UpdateTask;
