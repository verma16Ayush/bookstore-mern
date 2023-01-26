import { Box, Button, Card, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../const";
import { SignUp } from "../services/http.services";

export default function Signup(): JSX.Element{
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorSnackBarOpen, setErrorSnackBarOpen] = useState<boolean>(false);
  const [dupEmailSnackbarOpen, setDupEmailSnackbarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignupClick = ()=>{
    if(name === '' || email === '' || password === '' || confirmPassword === '')
      setErrorSnackBarOpen(true);
    else
      SignUp(name, email, password).then(res=>{
        console.log(res)
        navigate(APP_PATHS.login);
      }).catch((e)=>{
        setDupEmailSnackbarOpen(true);
        console.log(e)
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
              label='Name' 
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField 
              sx={{m: 2, FontFamily: 'Quicksand'}} 
              variant="standard" 
              label='Email' 
              type='email'
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField 
              type='password' 
              sx={{m: 2, FontFamily: 'Quicksand'}} 
              variant="standard" 
              label='Password'
              onChange={(e)=>setPassword(e.target.value)} 
            />
            <TextField 
              type='password' 
              sx={{m: 2, FontFamily: 'Quicksand'}} 
              variant="standard" 
              label='Confirm password' 
              error={confirmPassword !== password}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              helperText={confirmPassword !== password ? 'passwords don\'t match' : ''}
            />
            <Button sx={{m: 2, borderRadius: 0,}} variant='contained' onClick={()=>handleSignupClick()}>
              Sign in
            </Button>
            <Typography 
              sx={{
                m: 2, 
                fontSize: 'small', 
                cursor: 'pointer', 
                textAlign: 'center',  
                textDecorationLine: "underline"
              }}
              onClick={()=>navigate(APP_PATHS.login)}
            >
              Already a user? Sign in.
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
          width='auto'
          height='auto'
        />
      </Box>
      <Snackbar
        id='error-snackbar'
        open={errorSnackBarOpen}
        autoHideDuration={3000}
        onClose={()=>setErrorSnackBarOpen(false)}
        message="All fields are mandatory"
        sx={{
          ".MuiSnackbarContent-message" : {
            fontFamily: 'Quicksand'
          }
        }}
      />
      <Snackbar
        id='error-snackbar'
        open={dupEmailSnackbarOpen}
        autoHideDuration={3000}
        onClose={()=>setDupEmailSnackbarOpen(false)}
        message="Email already in use"
        sx={{
          ".MuiSnackbarContent-message" : {
            fontFamily: 'Quicksand'
          }
        }}
      />
    </Box>
  )
} 