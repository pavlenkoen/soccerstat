import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as React from "react";

import Box from "@mui/material/Box";

export const HomePage = () => {
  const [competitions, setCompetitions] = useState([]);
  axios.defaults.proxy = true;

  axios.defaults.headers = {
    Accept: "Application/json",

    "X-Auth-Token": "8c04d401925e49e599c1ae9253de1363",
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-headers": "*",
    "access-control-allow-methods": "*",
  };
  axios.defaults.baseURL = "http://localhost:5000";
  const getMatches = async () => {
    const response = await axios.create().get("/competitions");
    console.log(response);
    const matches = response.data.competitions;

    setCompetitions(matches);
  };
  useEffect(() => {
    getMatches();
  }, []);

  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, width: "100%", marginRight: "10%" }}>
      <img src="../../img/HomePageBackground.jpg" />
    </Box>
  );
};
