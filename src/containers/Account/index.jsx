import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { TextField, Box, Typography, Button } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Copyright from '@src/components/Copyright';
import { getUserId } from '@src/utils/localStorage';
import Header from '@src/components/Header';
// import Footer from '@src/components/Footer';
import getErrorMessage from '@src/errors/message';
import { updateUser, getUserDetails } from '@src/apis/user';
import {
  StyledBox,
  StyledTypography,
  StyledAvatar,
  StyledButton,
} from './index.style';

const AccountManagement = () => {
  const navigate = useNavigate();
  const userId = getUserId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [initialName, setInitialName] = useState('');
  const [initialEmail, setInitialEmail] = useState('');
  const [errors, setErrors] = useState({});

  const { enqueueSnackbar } = useSnackbar();

  const fetchUserDetails = async (id) => {
    const response = await getUserDetails(id);

    if (response) {
      const fetchedName = response?.result?.user?.name || '';
      const fetchedEmail = response?.result?.user?.email || '';

      setName(fetchedName);
      setEmail(fetchedEmail);
      setInitialName(fetchedName);
      setInitialEmail(fetchedEmail);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim(); // Trim the name
    const validationErrors = {};
    if (!trimmedName) validationErrors.name = 'Name is required'; // Validate trimmed name
    if (!email) validationErrors.email = 'Email is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Only update user if there are changes
    if (trimmedName === initialName && email === initialEmail) {
      enqueueSnackbar('No changes made to the account', { variant: 'warning' });
      setName(initialName);
      return;
    }

    try {
      const response = await updateUser({ name: trimmedName, email, userId });
      setErrors({}); // Clear any previous errors

      if (response?.status === 0) {
        enqueueSnackbar(getErrorMessage(response?.result?.code), {
          variant: 'error',
        });
        return;
      }

      enqueueSnackbar('Account updated successfully', { variant: 'success' });
      setInitialName(trimmedName);
      setInitialEmail(email);
    } catch (error) {
      enqueueSnackbar('An error occurred while updating the account', {
        variant: 'error',
      });
    }
  };

  const handleReturn = () => navigate('/');

  useEffect(() => {
    if (userId) fetchUserDetails(userId);
  }, [userId]);

  return (
    <>
      <Header />
      <StyledBox>
        <StyledBox className="title">
          <Button onClick={handleReturn} variant="contained">
            Return
          </Button>
          <StyledTypography>Manage your account</StyledTypography>
        </StyledBox>
        <StyledAvatar>
          <AccountCircleOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Edit Account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <StyledButton type="submit" className="customButton">
            Save Changes
          </StyledButton>
          <Copyright />
        </Box>
      </StyledBox>
    </>
  );
};

export default AccountManagement;
