import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const StyledBox = styled(Box)`
  && {
    padding-top: 164px;
  }
`;

export const StyledTypography = styled(Typography)`
  &&.customTypo {
    font-size: 28px;
    text-align: center;
    color: ${(props) => props.theme.palette.text.secondary};
    margin-bottom: 16px;
    white-space: normal;
  }
  &&.titleTypo {
    font-size: 48px;
    text-align: center;
    color: ${(props) => props.theme.palette.text.primary};
    margin-bottom: 8px;
  }
  &&.ConversationTypo {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main};
    margin-left: 10.5%;
    margin-top: 30px;
    margin-bottom: 30px;
    @media only screen and (max-width: 785px) {
      margin-left: 28px;
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    color: #fff;
    background-color: #1976d2 !important;
  }
`;
