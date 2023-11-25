import React, { useEffect } from 'react'
import "../App.scss"
import Input from 'antd/es/input/Input'
import { Button, Radio } from 'antd'
import format  from "date-fns/format";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch} from 'react-redux';
import { actCreateNewTask, actDeleteTaskById, actUpdateTaskById } from '../redux/feature/tasks/taskSlice';
import { APP_ROUTER } from '../constants/appRouter';
import { useNavigate } from "react-router-dom";
import { TASK_STATUS } from '../constants/taskConstants';



const schema = Yup.object().shape({
  title: Yup.string().required('Please input title'),
  creator: Yup.string().required('Please input creator'), 
  description: Yup.string().required('Please input desciption'),


})

const TaskForm = ({isEdit = false, currentTask}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const methods = useForm({
      defaultValues:{
        title:'',
        creator:'',
        status: TASK_STATUS.STATUS_NEW,
        createAt: new Date(),
        description:''
      },
      resolver: yupResolver(schema),
  });
  const {handleSubmit, control, formState:{errors}, reset} = methods; // xu ly

  const onValid = (FormValue) => {
    if(isEdit){
      dispatch(actUpdateTaskById({
        id:currentTask.id,
        taskUpdate: FormValue
      }))
    }

    dispatch(actCreateNewTask(FormValue))
    navigate(APP_ROUTER.ALL_TASK)
      //  console.log(FormValue," Form Valid")
  }


  useEffect( () => {
    if(isEdit && !!currentTask.createAt ){
      // Update gia tri form ve gia tri khi edit
      reset({...currentTask, createAt: new Date(currentTask.createAt)})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isEdit, currentTask])
  // chuc nang reset
  const handleResetForm = () => {
    reset({...currentTask, createAt: new Date(currentTask.createAt)});
  }


  const handleDeleteTask = () => {
    dispatch(actDeleteTaskById(currentTask.id))
    navigate(APP_ROUTER.ALL_TASK)
  }


  return (
    <div className='form-wrapper'>
      <form className='form-container' onSubmit={handleSubmit(onValid)}>
      <div className='task-form'>
      <label className='task-form_label'>Title</label>
      <Controller control={control} name='title' 
         render={ ({field}) => {
          return <Input placeholder='Please Input ...' {...field} />
         }}
      />
      </div>
      {!!errors.title?.message && <span style={{color:'red'}}>{errors.title?.message}</span>}
      <div className='task-form'>
      <label className='task-form_label'>Creator</label>
      <Controller control={control} name='creator' 
         render={ ({field}) => {
          return <Input placeholder='Please Input ...' {...field} />
         }}
      />
      </div>
      {!!errors.creator?.message && <span style={{color:'red'}}>{errors.creator?.message}</span>}
      <div className='task-form'>
      <label className='task-form_label'>Created At</label>
      <Controller control={control} name='createAt' 
         render={ ({field}) => {
          return <Input disabled value={ format(field.value, 'yyyy-MM-dd HH:mm')} />
         }}
      /> 
      </div>
      <div className='task-form'>
      <label className='task-form_label'>Description</label>
      <Controller control={control} name='description' 
         render={ ({field}) => {
          return <Input placeholder='Please Input ...' {...field} />
         }}
      />
      </div>
      {!!errors.description?.message && <span style={{color:'red'}}>{errors.description?.message}</span>}
      {isEdit && <div className='task-form'>
        <Controller control={control} name='status' render={ ({field}) => 
         <Radio.Group onChange={field.onChange} value={field.value}>
         <Radio value={TASK_STATUS.STATUS_NEW}>{TASK_STATUS.STATUS_NEW}</Radio>
         <Radio value={TASK_STATUS.STATUS_DOING}>{TASK_STATUS.STATUS_DOING}</Radio>
         <Radio value={TASK_STATUS.STATUS_DONE}>{TASK_STATUS.STATUS_DONE}</Radio>
       </Radio.Group>
          
        }></Controller>
      </div>}
      <div>
      {isEdit && <Button onClick={handleResetForm}>Reset</Button>}
      <Button htmlType='submit'>Save</Button>
      {isEdit && <Button onClick={handleDeleteTask}>Delete</Button>}

      </div> 
    </form>
    </div>
  )
}

export default TaskForm;
