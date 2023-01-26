import { Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";
import { CacheLoginUser } from "../services/common.services";
import { LogIn } from "../services/http.services";

export default function Login(): JSX.Element{
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginClick = ()=>{
    LogIn(email, password).then(res => {
      CacheLoginUser(res)
      navigate(APP_PATHS.home);
    })
  }

  return (
    <Box
      id='login-container'
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
      }}
    >
      <Box
        id='form-container'
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box>
          <Card 
          sx={{
            p: 8,
            display: 'flex',
            flexDirection: 'column',
            
          }}
          >
            <TextField 
              sx={{m: 2, FontFamily: 'Quicksand'}} 
              variant="standard" 
              label='email' 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField 
              type='password' 
              sx={{m: 2, FontFamily: 'Quicksand'}} 
              variant="standard" 
              label='password' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button 
              sx={{m: 2, borderRadius: 0}} 
              variant='contained'
              onClick={()=>handleLoginClick()}
            >
              Sign in
            </Button>
            <Typography 
              sx={{
                m: 2, 
                fontSize: 'small', 
                cursor: 'pointer', 
                textDecorationLine: "underline",
                textAlign: 'center'
              }}
              onClick={()=>navigate(APP_PATHS.signup)}
            >
              Not Registered? Create an account
            </Typography>
          </Card>
        </Box>
      </Box>
      <Box
        id='image-container'
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/4192.jpg`} 
          alt='illustration-artwork-books' 
          width='100%'
          height='auto'
        />
      </Box>  
    </Box>
  )
} 