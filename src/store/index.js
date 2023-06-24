import { configureStore } from "@reduxjs/toolkit";
import competitionsReducer from "./competitionSlice";
import teamsReducer from "./teamSlice";
import teamMatchesReducer from "./teamMatchesSlice";
import competitionMatchesReducer from "./competitionMatchesSlice";

export default configureStore({
  reducer: {
    competitions: competitionsReducer,
    teams: teamsReducer,
    teamMatches: teamMatchesReducer,
    competitionMatches: competitionMatchesReducer,
  },
});
