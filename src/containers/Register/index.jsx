import * as React from 'react';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Copyright from '@src/components/Copyright';
import getErrorMessage from '@src/errors/message';
import { register } from '@src/apis/user';
import {
  StyledContainer,
  StyledBox,
  StyledAvatar,
  StyledButton,
  StyledTypography,
} from './index.style';

const RegisterContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(name.trim(), email, password);

    if (!response) {
      enqueueSnackbar('Register failed', { variant: 'error' });
      return;
    }
    const errorMessage = getErrorMessage(response?.result?.code);
    if (errorMessage) {
      enqueueSnackbar(errorMessage, { variant: 'error' });
      return;
    }

    enqueueSnackbar('Register successfully', { variant: 'success' });

    setIsRegistered(true);
  };

  if (isRegistered) window.location.href = '/login';

  return (
    <StyledContainer className="customContainer">
      <CssBaseline />
      <StyledBox>
        <StyledAvatar className="customAva">
          <PersonAddOutlinedIcon />
        </StyledAvatar>
        <StyledTypography>Sign up</StyledTypography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                fullWidth
                name="name"
                required
                id="name"
                label="Your Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Send me email updates with inspiration."
              />
            </Grid>
          </Grid>
          <StyledButton type="submit" className="customButton">
            Sign Up
          </StyledButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </StyledBox>
      <Copyright />
    </StyledContainer>
  );
};

export default RegisterContainer;
