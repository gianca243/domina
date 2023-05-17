import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskList: []
}

export const taskSlice = createSlice({
  name:"task",
  initialState,
  reducers:{
    addTask: (state, action) => {
      const task = action.payload
      state.taskList = task
    }
  }
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer