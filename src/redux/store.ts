import { configureStore } from '@reduxjs/toolkit'
import corruptionReducer from '@redux/corruptionSlice'

export default configureStore({
  reducer: {
    corruption: corruptionReducer
  },
})