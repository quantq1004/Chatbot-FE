import React, { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { removeToken, removeUserId } from '@src/utils/localStorage';
import { Notifications, AccountCircle, ExitToApp } from '@mui/icons-material';
// import { AuthContext } from '@src/checkAdminContext';
import {
  StyledAvatar,
  StyledTypography,
  StyledBox,
  StyledIconButton,
  StyledMenuItem,
  StyledMenu,
} from './index.style';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  // const isAdmin = useContext(AuthContext);

  const handleReturn = () => navigate('/');

  const handleIconClick = (event) => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleToAcount = () => {
    navigate('/account');
    handleCloseMenu();
  };

  // const handleToUserManagement = () => {
  //   navigate('/user-management');
  //   handleCloseMenu();
  // };

  const onLogoutClick = () => {
    removeToken();
    removeUserId();
    handleCloseMenu();
    window.location.href = '/login';
  };

  return (
    <AppBar>
      <Toolbar>
        <StyledAvatar src="./logo.png" onClick={handleReturn} />
        <StyledTypography onClick={handleReturn}>LegalChat</StyledTypography>
        <StyledBox className="customBox" />
        <StyledBox>
          <StyledIconButton>
            <Notifications />
          </StyledIconButton>
          <StyledIconButton onClick={handleIconClick}>
            <AccountCircle />
          </StyledIconButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <StyledMenuItem onClick={handleToAcount} className="customItem">
              <AccountCircle sx={{ mr: 2 }} />
              Manage your account
            </StyledMenuItem>
            {/* {isAdmin && (
              <StyledMenuItem
                onClick={handleToUserManagement}
                className="customItem"
              >
                <Settings sx={{ mr: 2 }} />
                User management
              </StyledMenuItem>
            )} */}
            <StyledMenuItem onClick={onLogoutClick}>
              <ExitToApp sx={{ mr: 2 }} />
              Log out
            </StyledMenuItem>
          </StyledMenu>
        </StyledBox>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
