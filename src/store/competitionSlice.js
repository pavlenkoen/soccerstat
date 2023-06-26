import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/dist/";
import { getCompetitions } from "../dataReciever/dataReaciever";

export const axiosCompetitions = createAsyncThunk(
  "competitions/axiosCompetitions",
  getCompetitions
);

const competitionSlice = createSlice({
  name: "competitions",
  initialState: {
    competitions: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [axiosCompetitions.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [axiosCompetitions.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.competitions = action.payload;
      console.log(state.competitions);
    },
    [axiosCompetitions.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default competitionSlice.reducer;
