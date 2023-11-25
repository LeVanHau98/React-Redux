import { React } from "react";

import { Link} from "react-router-dom";
import { APP_ROUTER } from "../constants/appRouter";



const SidebarComponent = () => {
      // const location = useLocation()
      // const { pathname} = location
      return (
            <div className="sidebar-component">
                  <ul className="sidebar-component_menu">
                   <li className="sidebar-component_menu-item">
                        <Link to={APP_ROUTER.ALL_TASK}>All Task</Link>
                  </li>
                   <li className="sidebar-component_menu-item">
                        <Link  to={APP_ROUTER.NEW_TASK}>New Task</Link>
                  </li>
                   <li className="sidebar-component_menu-item">
                        <Link to={APP_ROUTER.DOING_TASK}>Doing Task</Link>
                  </li>
                   <li className="sidebar-component_menu-item">
                        <Link to={APP_ROUTER.DONE_TASK}>Done Task</Link>
                  </li>

                  </ul>

            </div>
      )
}


export default SidebarComponent;