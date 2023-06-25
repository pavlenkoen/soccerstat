import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CompetitionsGridBox from "../../components/GridBoxes/CompetitionsGridBox";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux/es/exports";
import { axiosCompetitions } from "../../store/competitionSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const LeaguesPage = () => {
  const competitions = useSelector((state) => state.competitions.competitions);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    try {
      dispatch(axiosCompetitions());
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const filteredCompetitions = competitions.filter((compet) => {
    return compet.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <Box
        sx={{
          ml: "10%",
        }}
      >
        {error && (
          <Box>
            <h2 style={{ color: "red" }}>{`ERROR:${error}`}</h2>
          </Box>
        )}
        <SearchBar setValue={setValue} />
        <CompetitionsGridBox ordersArray={filteredCompetitions} />
      </Box>
    </>
  );
};
