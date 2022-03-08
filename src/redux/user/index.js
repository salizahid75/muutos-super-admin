import { createSlice } from "@reduxjs/toolkit"

const userReducer = createSlice({
  name: "user",
  initialState: {
    role:null,
    name: null,
    avatar: null,
    email: null,
    id: null,
    phone: null,
  },
  reducers: {
    setUserData(state, { payload: { role, name, avatar, email, id, phone } }) {
      state.role = role
      state.name = name
      state.avatar = avatar
      state.email = email
      state.id = id
      state.phone = phone
    },
  },
})

export const getUserData = state => state.user

export const { setUserData } = userReducer.actions
export default userReducer.reducer
