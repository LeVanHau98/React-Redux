import React from 'react'
import HeaderComponent from '../../component/HeaderComponent';
import SidebarComponent from '../../component/SibbarComponent';
import { Outlet } from 'react-router-dom';

const MainLayout = (props) => {
  return (
    <div>
      <HeaderComponent />
      <div style={{display:"flex"}}>
         <SidebarComponent/>
         <div className='right-sidebar'> 
         <Outlet />
         </div>
      </div>  
    </div>
  )
}

export default MainLayout;

