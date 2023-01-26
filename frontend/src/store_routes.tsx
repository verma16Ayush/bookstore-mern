import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { APP_PATHS } from "./const";
import Login from "./pages/login";
import Signup from "./pages/signup";
export default function StoreRoutes() {
  
  return (
    <BrowserRouter>
      <Box
        id='master-container'
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          id='navbar-container'
          sx={{
            position: "fixed",
            width: "100%",
            height: "70px",
            top: 0,
            left: 0,
            display: "flex",
          }}
        >
          <Navbar />
        </Box>
        <Box
          id='page-contents'
          sx={{
            position: "fixed",
            width: "100%",
            height: "calc(100vh - 70px)",
            top: "70px",
            left: 0,
            overflow: "auto",
          }}
        >
          <Routes>
            <Route path={APP_PATHS.home} element={<></>} />
            <Route path={APP_PATHS.login} element={<Login />} />
            <Route path={APP_PATHS.signup} element={<Signup />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
