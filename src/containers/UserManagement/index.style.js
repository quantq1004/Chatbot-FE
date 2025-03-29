import styled from 'styled-components';
import { Box, Typography, Avatar, Button } from '@mui/material';

export const StyledBox = styled(Box)`
  margin: 100px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-family: Lato;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 30px;
    line-height: 1.5;
    text-align: center;
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    margin: 4px;
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const StyledButton = styled(Button)`
  &&.customButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 16px auto;
    width: 50%;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;
