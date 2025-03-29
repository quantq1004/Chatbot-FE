import styled from 'styled-components';
import { Typography } from '@mui/material';

export const StyledTypography = styled(Typography)`
  && {
    font-size: 16px;
    text-align: center;
    color: ${(props) => props.theme.palette.primary.contrastText};
    margin-top: 20px;
  }
`;
