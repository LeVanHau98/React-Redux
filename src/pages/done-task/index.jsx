import { React, useEffect } from "react";
import MainContentTask from "../../component/MainContentTask";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAllTask, setNewPage } from "../../redux/feature/tasks/taskSlice";
import { Pagination, Spin } from "antd";
import { TASK_STATUS } from "../../constants/taskConstants";

const DoneTask = () => {
      const dispatch = useDispatch()
      const { isLoading, tasks, pagination, searchKey} = useSelector( state => state.task)

      useEffect( () => {
            dispatch(actFetchAllTask({
                  _page: 1,
                  _limit: pagination.limitPerPage,
                  q: searchKey,
                  status: TASK_STATUS.STATUS_DONE
            }))
            return () => {
                  dispatch(setNewPage(1))
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])



      const handleChangePage = (newPage) => {
            dispatch(setNewPage(newPage))
            dispatch(actFetchAllTask({
                  _page: newPage,
                  _limit: pagination.limitPerPage,
                  q: searchKey,
                  status: TASK_STATUS.STATUS_DONE
            }))

      }
      if(isLoading){
            return <Spin />
      }

      return (
            <div>
                  {tasks.length === 0 ? <div>No Tasks</div> : <>
                  <MainContentTask tasks={tasks}/>
                  <Pagination 
                   defaultCurrentSize={pagination.limitPerPage} 
                   current={pagination.currentPage} 
                   total={pagination.total}
                   onChange={handleChangePage}
                  />
                  </>
                  }               
            </div>
             )
}


export default DoneTask;