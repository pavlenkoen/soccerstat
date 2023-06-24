import axios from "axios";

export const getCompetitionMatches = async (competitionId) => {
  const response = await axios
    .create()
    .get(`/competitions/${competitionId}/matches`);

  const matches = response.data.matches;

  return matches;
};

export const getCompetitions = async () => {
  const response = await axios.create().get("/competitions");

  const matches = response.data.competitions;

  return matches;
};

export const getTeamMatches = async (teamId) => {
  const response = await axios.create().get(`/teams/${teamId}/matches`);

  const matches = response.data.matches;

  return matches;
};

export const getTeams = async () => {
  const response = await axios.create().get("/teams");

  const teams = response.data.teams;

  return teams;
};
