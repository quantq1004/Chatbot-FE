import styled from 'styled-components';
import { Box, Typography, Grid, Divider } from '@mui/material';

export const StyledBox = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }
  &&.customBox {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    background-color: ${(props) => props.theme.palette.primary.main};
    padding: 30px 80px 10px;
  }
  &&.newBox {
    color: #ffff;
    justify-content: space-between;
    padding: 20px 50px;
    && > * {
      margin-right: 30px;
    }
    @media only screen and (max-width: 800px) {
       {
        flex-direction: column;
        padding: 20px 0px;
        margin-right: 0px;
        && > *:not(:first-child) {
          margin-top: 30px;
        }
      }
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-size: 16px;
    padding-bottom: 8px;
  }
  &&.customTypo {
    font-size: 22px;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
  }
  &&.titleTypo {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const StyledGrid = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: between;
    align-items: right;
    margin: 0 auto;
  }
`;

export const StyledTypography1 = styled(Typography)`
  && {
    font-size: 16px;
    padding-bottom: 8px;
    padding-left: 20px;
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    border: 1px solid silver;
  }
`;
