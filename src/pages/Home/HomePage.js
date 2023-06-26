import "./HomePage.css";
import * as React from "react";
import { Card, Box, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "block",
        flexGrow: 1,
        width: "100%",

        textAlign: "center",
      }}
    >
      <h1 style={{ marginRight: "15%", color: "blue" }}>SOCCERSTAT</h1>
      <Card
        className="cardchamp"
        onClick={() => {
          navigate("/leagues");
        }}
        sx={{
          minWidth: "60%",
          minHeight: "50%",
          marginLeft: "12%",
          marginTop: "1rem",
          width: "100px",
          height: { xs: "150px", sm: "230px", md: "300px", lg: "400px" },
          border: "1px solid",
          boxShadow: "8px 10px 5px 2px blue",
          marginBottom: "2%",
        }}
      >
        <CardHeader
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            height: "100px",
            justifyContent: "center",
            color: "blue",
          }}
          title="ЧЕМПИОНАТЫ"
        />
      </Card>
      <Card
        className="cardteam"
        onClick={() => {
          navigate("/teams");
        }}
        sx={{
          minWidth: "60%",
          minHeight: "50%",
          marginLeft: "12%",
          marginTop: "2rem",
          width: "100px",
          height: { xs: "150px", sm: "230px", md: "300px", lg: "400px" },
          border: "1px solid",
          boxShadow: "8px 10px 5px 2px blue",
          marginBottom: "10%",
        }}
      >
        <CardHeader
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            height: "100px",
            justifyContent: "center",
            color: "blue",
          }}
          title="КОМАНДЫ"
        />
      </Card>
    </Box>
  );
};
