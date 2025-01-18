import { createSlice } from "@reduxjs/toolkit";
import {fetchMovie} from "./movieAction";

const initialState={
     data:{},
     status: "",
     error:{}
}
export const  movieSlice =createSlice({
       name:"movie",
       initialState :initialState,
       reducers:{},
       extraReducers(builder){
          builder
          .addCase (fetchMovie.pending,(state, action)=>{
               //TODO
               state.status="PENDING"

          })
          .addCase(fetchMovie.fulfilled,(state,action)=>{
                //TODO
                state.status="SUCCEED"
                console.log('payload ', action.payload)
                state.data = action.payload // Payload From API
          })   
          .addCase(fetchMovie.rejected,(state,action)=>{
                //TODO
                state.status="ERROR"
                console.log(action.error)
                state.error = action.error

          })   
     
     }
})
export default movieSlice.reducer

