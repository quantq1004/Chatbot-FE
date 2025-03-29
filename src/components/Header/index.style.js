import styled from 'styled-components';
import {
  Avatar,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  && {
    cursor: pointer;
    margin-left: 30px;
    width: 90px;
    height: 90px;
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    cursor: pointer;
    font-size: 24px;
    color: inherit;
    white-space: nowrap;
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const StyledBox = styled(Box)`
  && {
    margin: 20px 30px;
    margin-right: 10px;
  }
  &&.customBox {
    flex-grow: 1;
  }
`;

export const StyledIconButton = styled(IconButton)`
  && {
    color: inherit;
    margin-left: 10px;
  }
  .MuiSvgIcon-root {
    font-size: 36px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    margin: 0 12px;
    font-size: 18px;
    color: ${(props) => props.theme.palette.primary.main};
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.primary.contrastText};
    }
  }
  &&.customItem {
    display: flex;
    justify-content: start;
    font-weight: bold;
    font-size: 18px;
    border: 3px solid skyblue;
    margin-bottom: 10px;
  }
`;

export const StyledMenu = styled(Menu)`
  && {
    .MuiPaper-root {
      margin-left: -40px;
      overflow: visible;
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.3));
      margin-top: 10px;
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 14px;
        width: 14px;
        height: 14px;
        background-color: #ffff;
        transform: translateY(-50%) rotate(45deg);
        z-index: 0;
      }
    }
  }
`;
