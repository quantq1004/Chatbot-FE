import styled from 'styled-components';
import { Grid, Box, Typography, Avatar, Button } from '@mui/material';

export const StyledGrid = styled(Grid).attrs({
  container: true,
  component: 'main',
})`
  &&.mainContainer {
    height: 100vh;
  }
`;

export const StyledBackgroundGrid = styled(Grid)`
  && {
    /* background-image: url(https://source.unsplash.com/random?wallpapers); */
    background-image: url(https://idc.edu/wp-content/uploads/2018/02/8-Ways-to-Learn-English-Faster.jpg);
    background-repeat: no-repeat;
    background-color: lightblue;
    background-size: cover;
    background-position: center;
  }
`;

export const StyledBox = styled(Box)`
  && {
    margin-top: 64px;
    margin-bottom: 64px;
    margin-left: 32px;
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-family: Lato;
    margin-bottom: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 30px;
    line-height: 1.5;
    text-align: center;
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    margin: 8px;
    background-color: ${(props) => props.theme.palette.secondary.main};
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
