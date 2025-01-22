import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from '../features/counter/CounterSilce'
import movieReducer from '../features/movie/movieSilce'
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    movie: movieReducer,
  auth: authReducer
  
  
  },

})

