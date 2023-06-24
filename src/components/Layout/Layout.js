import { Outlet } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import "@fontsource/roboto/500.css";
import Header from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Box
        position="static"
        sx={{
          width: "100%",
          background: "aliceblue",
          marginTop: "1%",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
