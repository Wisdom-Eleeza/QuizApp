import { configureStore, combineReducers } from '@reduxjs/toolkit'
import stepperReducer from '../features/stepperSlice'

const rootReducer = combineReducers({
  counter: stepperReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
