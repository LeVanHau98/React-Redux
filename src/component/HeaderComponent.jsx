import { React } from "react";
import '../App.scss';
import { Button, Input } from "antd";
import { APP_ROUTER } from "../constants/appRouter";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNewPage, setSearchKey } from "../redux/feature/tasks/taskSlice";
import { actFetchAllTask } from "../redux/feature/tasks/taskSlice";
import { TASK_STATUS } from "../constants/taskConstants";




const HeaderComponent = () => {

      const dispatch = useDispatch()
      const searchKey = useSelector( state => state.task.searchKey)
      const pagination = useSelector( state => state.task.pagination)
      const location = useLocation()



      const computedCurrentStatusSearch = (pathName) => {
            switch(pathName){
                  case"/all-task": return""
                  case"/new-task": return TASK_STATUS.STATUS_NEW
                  case"/doing-task": return TASK_STATUS.STATUS_DOING
                  case"/done-task": return TASK_STATUS.STATUS_DONE
                  default: return ""
            }
      }
      



      const handleSearchTask = (event) => {
            event.preventDefault()

            const statusSearch = computedCurrentStatusSearch(location.pathname)

            dispatch(actFetchAllTask({
                  _page: 1,
                  _limit: pagination.limitPerPage,
                  q: searchKey,
                  ...(!!statusSearch ? { status: statusSearch} : {})
            }))
            dispatch(setNewPage(1))

      }

      const handleChangeInputSearch = (event) => {
            const value = event.target.value
            //Khi có value sẽ dispatch update searchKey lên store  
            dispatch(setSearchKey(value))
      }

    
      return (
            <div className="header-component">
                  <Button className="header-component_name"><Link to={APP_ROUTER.ADD_NEW_TASK}>Create New Task</Link></Button>
                  <form className="header-component_search" onSubmit={handleSearchTask}> 
                       <Input placeholder="Please input search..." value={searchKey} onChange={handleChangeInputSearch}></Input>
                       <Button type="submit"> Search</Button>                 
                  </form>
            </div>
      )
}


export default HeaderComponent;