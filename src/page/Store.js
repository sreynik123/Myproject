import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from '../features/counter/CounterSilce'
import movieReducer from '../features/movie/movieSilce'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    movie: movieReducer
  },
})

