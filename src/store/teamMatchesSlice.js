import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/dist/";
import { getTeamMatches } from "../dataReciever/dataReaciever";

export const axiosTeamMatches = createAsyncThunk(
  "teamMatches/axiosTeamMatches",
  getTeamMatches
);

const teamMatchesSlice = createSlice({
  name: "teamMatches",
  initialState: {
    teamMatches: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [axiosTeamMatches.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [axiosTeamMatches.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.teamMatches = action.payload;
    },
    [axiosTeamMatches.rejected]: (state, action) => {},
  },
});

export default teamMatchesSlice.reducer;
