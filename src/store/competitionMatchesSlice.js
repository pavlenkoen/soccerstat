import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/dist/";
import { getCompetitionMatches } from "../dataReciever/dataReaciever";

export const axiosCompetitionMatches = createAsyncThunk(
  "competitionMatches/axiosCompetitionMatches",
  getCompetitionMatches
);

const competitionMatchesSlice = createSlice({
  name: "competitionMatches",
  initialState: {
    competitionMatches: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [axiosCompetitionMatches.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [axiosCompetitionMatches.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.competitionMatches = action.payload;
    },
    [axiosCompetitionMatches.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default competitionMatchesSlice.reducer;
