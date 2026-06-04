import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './authSlice'
import tabReducer from './tabSlice' // something is exported from courseSlice we just give a name called counterReducer
export const store = configureStore({
  reducer: {
    tab : tabReducer
  },
})