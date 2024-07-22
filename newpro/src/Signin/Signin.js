import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Button, TextField, Box, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import im from "../Images/222.webp";

const socialButtonStyles = {
  height: 40,
  width: 200,
  padding: 1,
  borderRadius: 10,
  margin: '8px 0',
};

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match, email is valid, and password meets the criteria
    if (password === confirmPassword && emailRegex.test(email) && passwordRegex.test(password)) {
      alert('Submit Successfully');
      navigate('/');
    } else {
      alert('Please check your inputs. Passwords should match, email should be valid, and the password should have at least 8 characters including letters and numbers.');
      navigate('/SignUp');
    }
  };

  const handleSocialLogin = (provider) => {
    let socialMediaUrl;

    switch (provider) {
      case 'instagram':
        socialMediaUrl = 'https://www.instagram.com/';
        break;
      case 'twitter':
        socialMediaUrl = 'https://twitter.com/';
        break;
      case 'facebook':
        socialMediaUrl = 'https://www.facebook.com/';
        break;
      default:
        socialMediaUrl = '/';
    }
    window.location.href = socialMediaUrl;
  };

  return (
    <div style={{ backgroundImage: `url(${im})`, backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '30px',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <Typography component="h2" variant="h5" sx={{ marginBottom: '16px', textDecoration: 'underline', fontStyle: 'italic' }}>
            Sign in
          </Typography>
          <Box component="form" id="signupForm" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              label="Email Id"
              type="email"
              required
              fullWidth
              value={email}
              onChange={handleEmailChange}
              inputProps={{ pattern: emailRegex.source }}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginBottom: 2, color: '#333' }}
            />
            <TextField
              label="Password"
              type="password"
              required
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginBottom: 2, color: '#333' }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              required
              fullWidth
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginBottom: 2, color: '#333' }}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ marginBottom: '16px' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Submit
              </Link>
            </Button>
            <center>
              <Typography component="div" variant="h6" sx={{ marginBottom: '16px', textDecoration: 'underline' }}>
                OR
              </Typography>
            </center>
            <Box>
              <center>
                <Button
                  type="button"
                  className="ins"
                  onClick={() => handleSocialLogin('instagram')}
                  sx={{ ...socialButtonStyles }}
                >
                  <FaInstagram size={30} />
                </Button>
              </center>
              <center>
                <Button
                  type="button"
                  className="ins"
                  onClick={() => handleSocialLogin('twitter')}
                  sx={{ ...socialButtonStyles }}
                >
                  <FaTwitter size={30} />
                </Button>
              </center>
              <center>
                <Button
                  type="button"
                  className="ins"
                  onClick={() => handleSocialLogin('facebook')}
                  sx={{ ...socialButtonStyles }}
                >
                  <FaFacebook size={30} />
                </Button>
              </center>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Signin;
