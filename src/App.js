
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { APP_ROUTER } from './constants/appRouter';
import AllPage from './pages/all-task';
import DoingTask from './pages/doing-task';
import NewTask from './pages/new-task';
import DoneTask from './pages/done-task';
import MainLayout from './layouts/MainLayout';
import AddNewTask from './pages/add-new-task';
import UpdateTask from './pages/updateTask';


function App() {


  return (
    <div className="App">
      <BrowserRouter>    
        <Routes >
          <Route element={<MainLayout />}>
            <Route index element={<AllPage />} />
            <Route path={APP_ROUTER.ALL_TASK} element={<AllPage />} />
            <Route path={APP_ROUTER.UPDATE_TASK} element={<UpdateTask />} />
            <Route path={APP_ROUTER.NEW_TASK} element={<NewTask />} />
            <Route path={APP_ROUTER.DOING_TASK} element={<DoingTask />} />
            <Route path={APP_ROUTER.DONE_TASK} element={<DoneTask />} />
            <Route path={APP_ROUTER.ADD_NEW_TASK} element={<AddNewTask />} />
          </Route>
          <Route path={"/"} element={<Navigate to={APP_ROUTER.ALL_TASK} />}/>   
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
