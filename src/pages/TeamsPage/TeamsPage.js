import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import TeamsGridBox from "../../components/GridBoxes/TeamsGridBox";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux/es/exports";
import { axiosTeams } from "../../store/teamSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const TeamsPage = () => {
  const teams = useSelector((state) => state.teams.teams);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(axiosTeams());
  }, []);
  console.log(teams);

  const filteredTeams = teams.filter((team) => {
    return team.name.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <>
      <Box sx={{ ml: "10%" }}>
        <SearchBar setValue={setValue} />
        <TeamsGridBox ordersArray={filteredTeams} />
      </Box>
    </>
  );
};
