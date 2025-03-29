import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@mui/material';
import { getUsers } from '@src/apis/user';
import Header from '@src/components/Header';
// import Footer from '@src/components/Footer';
import Copyright from '@src/components/Copyright';
import getErrorMessage from '@src/errors/message';
import { StyledBox, StyledTypography } from './index.style';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const fetchUsers = async () => {
    setLoading(true);
    const response = await getUsers();

    if (!response) {
      enqueueSnackbar('Get users failed', { variant: 'error' });
      setLoading(false);
      return;
    }

    const errorMessage = getErrorMessage(response?.result?.code);
    if (errorMessage) {
      enqueueSnackbar(errorMessage, { variant: 'error' });
      setLoading(false);
      return;
    }

    const usersArray = response?.result?.users;
    setUsers(usersArray);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <StyledBox>
        <StyledTypography variant="h4" gutterBottom>
          User Management
        </StyledTypography>
        {loading ? (
          <Typography variant="body1">Loading...</Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.isAdmin ? 'Yes' : 'No'}</TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" size="small">
                        Send Email
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        style={{ marginLeft: '10px' }}
                      >
                        Ban
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </StyledBox>
      <Copyright />
    </div>
  );
};

export default UserManagement;
