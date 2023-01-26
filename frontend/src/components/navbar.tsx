import { Box, Button, Typography, useTheme } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import React from "react"
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
    id='navbar'
    sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography 
        fontWeight={400} 
        fontSize={35}
        color={theme.palette.primary.main}
        sx={{
          flex: '1',
          ml: 2
        }}
      >
        BookStore
      </Typography>
      <Box
        id='login-signout-account'
        sx={{
          
          m: 2,
        }}
        >
        <Button 
          // variant="contained"
          disableElevation
          sx={{
            borderRadius: 0,
            alignItems: 'center',
            justifyContent: 'center',
            m: 0,
          }}
          onClick={() => navigate(APP_PATHS.login)}
          startIcon={<LoginIcon/>}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  )
}