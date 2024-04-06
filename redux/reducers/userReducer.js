import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  userInfo: null
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
    },
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: () => initialState,
  },
})

export const { login , logout , userInfo } = userSlice.actions

export default userSlice.reducer