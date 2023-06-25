import "./HomePage.css";
import * as React from "react";
import Box from "@mui/material/Box";

export const HomePage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        marginRight: "10%",
        textAlign: "center",
      }}
    >
      <h1>SOCCERSTAT</h1>
    </Box>
  );
};
