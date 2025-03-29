import styled from 'styled-components';
import { Box, Container, Avatar, Button, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
  &&.customContainer {
    padding: 35px;
    width: 30%;
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledBox = styled(Box)`
  && {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledAvatar = styled(Avatar)`
  &&.customAva {
    background-color: green;
    margin: 6px;
  }
`;

export const StyledButton = styled(Button)`
  &&.customButton {
    margin-top: 24px;
    margin-bottom: 16px;
    width: 100%;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-size: 30px;
  }
`;
