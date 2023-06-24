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

  useEffect(() => {
    dispatch(axiosCompetitions());
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
        <SearchBar setValue={setValue} />
        <CompetitionsGridBox ordersArray={filteredCompetitions} />
      </Box>
    </>
  );
};
