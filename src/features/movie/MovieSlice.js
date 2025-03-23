import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie, fetchMovieDatail } from "./MovieAction";

const initialState = {
  data: {},
  status: "",
  error: {},
  detail: {},
};
export const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovie.pending, (state, action) => {
        //TODO
        state.status = "PENDING";
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        //TODO
        state.status = "SUCCEED";
        console.log("payload ", action.payload);
        state.data = action.payload; // Payload From API
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        //TODO
        state.status = "ERROR";
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(fetchMovieDatail.fulfilled, (state, action) => {
        state. detail = action.payload
        state.status="SUCCEED"
      });
  },
});
export default MovieSlice.reducer;
