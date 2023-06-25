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
  const [error, setError] = useState();

  useEffect(() => {
    try {
      dispatch(axiosTeams());
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const filteredTeams = teams.filter((team) => {
    return team.name.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <>
      <Box sx={{ ml: "10%" }}>
        {error && (
          <Box>
            <h2 style={{ color: "red" }}>{`ERROR:${error}`}</h2>
          </Box>
        )}
        <SearchBar setValue={setValue} />
        <TeamsGridBox ordersArray={filteredTeams} />
      </Box>
    </>
  );
};
