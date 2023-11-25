import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../feature/tasks/taskSlice";





export const store = configureStore({
      reducer: {
            task: tasksReducer,
      }
})