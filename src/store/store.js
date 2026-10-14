import { configureStore } from '@reduxjs/toolkit'
import noticesReducer from './noticesSlice'
import uiReducer from './uiSlice'

export const store = configureStore({
  reducer: {
    notices: noticesReducer,
    ui: uiReducer,
  },
})

export default store
