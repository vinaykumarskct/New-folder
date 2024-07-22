import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import im from "../Images/222.webp";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/system';

const LoginForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleApi = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: username,
        password: password,
      });

      console.log(response.data);

      if (response.data.token) {
        console.log('Login successful');
        // Redirect the user or perform other actions upon successful login
        window.location.href = "/Home";
      } else {
        console.log('Login failed');
        // Display an error message as an alert
        setErrorMessage('Invalid credentials. Please try again.');
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.log('Error:', error.message);
      // Display an error message as an alert
      setErrorMessage('An error occurred. Please try again later.');
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${im})`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0
    }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '30px',
          justifyContent: 'center',
          color: '#fff',
          padding: isSmallScreen ? '10px' : '20px', // Adjust padding for small screens
        }}
      >
        <CssBaseline />
        <Typography variant="h4" mb={4} sx={{ color: '#17a2b8', fontFamily: 'phosphate ', fontWeight: 'bold', fontSize: '2rem' }}>
          Login
        </Typography>

        {errorMessage && (
          <Typography variant="body2" color="error" align="center" sx={{ marginBottom: 2 }}>
            {errorMessage}
          </Typography>
        )}

        <Box component="form" noValidate>
          <TextField
            onChange={handleUsernameChange}
            value={username}
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            required
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 2,
              color: '#333',
            }}
          />
          <TextField
            onChange={handlePasswordChange}
            value={password}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 2,
              color: '#333',
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{ marginBottom: 2, color: 'lightblue' }}
          />

          <Button
            onClick={handleApi}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#000', color: '#fff' }}
          >
            LOGIN
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/Forget" variant="body2" style={{ color: 'white' }}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            <span style={{ color: 'lightblue' }}> Don't have an account?</span>{' '}
            <Link to="/SignUp" style={{ color: 'white' }}>
              SignUp
            </Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default LoginForm;
