import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nickName: "",
  email: "",
  auth: "",
  _id:""
}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {nickName, email, auth, _id} = action.payload
      state.nickName = nickName
      state.email = email
      state.auth = auth
      state._id = _id
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    }
  }
})

export const {addUser, changeEmail} = userSlice.actions

export default userSlice.reducer