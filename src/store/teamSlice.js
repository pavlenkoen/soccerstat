import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/dist/";
import { getTeams } from "../dataReciever/dataReaciever";

export const axiosTeams = createAsyncThunk("teams/axiosTeams", getTeams);

const teamSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [axiosTeams.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [axiosTeams.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.teams = action.payload;
    },
    [axiosTeams.rejected]: (state, action) => {},
  },
});

export default teamSlice.reducer;
