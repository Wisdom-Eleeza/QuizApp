import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../components/forms/services/api'

export const registerUser = createAsyncThunk(
  'register',
  async (msg, thunkAPI) => {
    try {
      const state = thunkAPI.getState()
      console.log(state)
      // const response = await Api.post('/registerUser')
    } catch (error) {
      console.log(error)
    }
  }
)
const initialState = {
  username: '',
  email: '',
  password: '',
  profileImage: '',
  selectedInterest: [],
  addedInterest: [],
  isLoading: false,
}
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserDetails: (state, { payload }) => {
      state.username = payload.username
      state.email = payload.email
      state.password = payload.password
    },
    setUserImage: (state, { payload }) => {
      state.profileImage = payload
    },
    setSelectedInterest: (state, { payload }) => {
      state.selectedInterest = payload
    },
    setAddedInterest: (state, { payload }) => {
      state.addedInterest = payload
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        (registerUser.pending,
        state => {
          state.isLoading = true
        })
      )
      .addMatcher(
        (registerUser.fulfilled,
        state => {
          state.isLoading = false
        })
      )
      .addMatcher(
        (registerUser.rejected,
        state => {
          state.isLoading = false
        })
      )
  },
})

export const {
  setUserDetails,
  setUserImage,
  setSelectedInterest,
  setAddedInterest,
} = authSlice.actions

export default authSlice.reducer
