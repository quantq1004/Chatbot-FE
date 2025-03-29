import * as React from 'react';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '@src/components/Copyright';
import getErrorMessage from '@src/errors/message';
import { login } from '@src/apis/user';
import { setToken, setUserId } from '@src/utils/localStorage';
import {
  StyledGrid,
  StyledBackgroundGrid,
  StyledBox,
  StyledTypography,
  StyledAvatar,
  StyledButton,
} from './index.style';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogined, setIsLogined] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, password);

    if (!response) {
      enqueueSnackbar('Login failed', { variant: 'error' });
      return;
    }

    const errorMessage = getErrorMessage(response?.result?.code);
    if (errorMessage) {
      enqueueSnackbar(errorMessage, { variant: 'error' });
      return;
    }

    setIsLogined(true);
    if (response && response.result) {
      const { userId, accessToken } = response?.result?.user;
      if (accessToken) setToken(accessToken);
      if (userId) setUserId(userId);
    }
  };

  if (isLogined) window.location.href = '/';

  return (
    <StyledGrid className="mainContainer">
      <CssBaseline />
      <StyledBackgroundGrid item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <StyledBox>
          <StyledTypography>
            Welcome to our
            <br />
            Legal Chatbot website!
          </StyledTypography>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <StyledButton type="submit" className="customButton">
              Sign In
            </StyledButton>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Copyright />
          </Box>
        </StyledBox>
      </Grid>
    </StyledGrid>
  );
};

export default LoginContainer;
