import React from 'react';
import { Link } from 'react-router-dom';
import im from "../Images/222.webp";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const Forget = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ backgroundImage: `url(${im})`, backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
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
        }}
      >
        <CssBaseline />
        
        <Typography variant="h4" mb={4} sx={{ color: '#17a2b8', fontFamily: 'phosphate ', fontWeight: 'bold', fontSize: '2rem' }}>
          Forget Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            required
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginBottom: 2, color: '#333' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#000', color: '#fff' }}
          >
            Reset Password
          </Button>
        </Box>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            <span style={{ color: 'lightblue' }}>Remembered your password?</span> <Link to="/" style={{ color: 'white' }}>Login</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Forget;
