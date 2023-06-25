import axios from "axios";

const api = axios.create({
  headers: {
    "X-Auth-Token": "8c04d401925e49e599c1ae9253de1363",
  },
});

export const getCompetitionMatches = async (competitionId) => {
  const response = await api.get(`/competitions/${competitionId}/matches`);

  const matches = response.data.matches;

  return matches;
};

export const getCompetitions = async () => {
  const response = await api.get("/competitions");

  const matches = response.data.competitions;

  return matches;
};

export const getTeamMatches = async (teamId) => {
  const response = await api.get(`/teams/${teamId}/matches`);

  const matches = response.data.matches;

  return matches;
};

export const getTeams = async () => {
  const response = await api.get("/teams");

  const teams = response.data.teams;

  return teams;
};
