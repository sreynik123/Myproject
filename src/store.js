import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/CounterSlice"
import movieReducer from "./features/movie/MovieSlice"
import authReducer from"./features/auth/authSlice"
import peopleReducer from './features/People/Peopleslice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    movie: movieReducer,
  auth: authReducer,
  people : peopleReducer
  
  },

})

