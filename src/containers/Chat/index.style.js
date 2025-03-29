import styled from 'styled-components';
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const StyledGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledBox = styled(Box)`
  &&.customBox {
    padding-top: 64px;
    padding-bottom: 20px;
    background-color: ${(props) => props.theme.palette.background.paper};
  }
  &&.chatBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
`;

export const StyledTypography = styled(Typography)`
  &&.titleTypo {
    font-size: 48px;
    text-align: center;
    color: ${(props) => props.theme.palette.text.primary};
    padding-top: 100px;
  }
  &&.paraTypo {
    width: 20%;
    height: 40px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #7ac70c;
    margin-bottom: 0.5rem;
    flex-shrink: 0;
  }
`;

export const StyledStack = styled(Stack)`
  &&.customStack {
    padding-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
`;

export const StyledButton = styled(Button)`
  && {
    font-size: 13px;
    margin: 8px;
    color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.containedButton {
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
  &&.createChat {
    margin: 0px;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

export const ButtonGrid = styled(Grid)`
  && {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6%;
    justify-content: center;
    align-items: center;
    width: 24%;
    padding-top: 30px;
    margin: 0 auto;
    place-content: center;
  }
`;

export const StyledCard = styled(Card)`
  &&.customChat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 420px;
    border-radius: 10px;
    background-color: #98f5ff;
    box-shadow: 0px 0px 5px ${(props) => props.theme.palette.primary.main};
    transition: transform 0.3s;
    transform-style: preserve-3d;
    cursor: pointer;
    &.flipped {
      transform: rotateY(180deg);
    }
    @media only screen and (max-width: 800px) {
      height: 250px;
    }
  }
`;

export const StyledItemTypography = styled(Typography)`
  &&.titleTypo {
    display: flex;
    font-weight: bold;
    margin: 40px 10px 20px;
    padding: 10px;
    font-size: 40px;
    color: ${(props) => props.theme.palette.secondary.main};
    @media only screen and (max-width: 800px) {
      font-size: 24px;
    }
  }
  &&.descTypo {
    padding: 10px 25px;
    font-size: 23px;
    color: black;
    transform: rotateY(180deg);
    word-break: break-word;
    text-align: left;
    @media only screen and (max-width: 800px) {
      font-size: 16px;
    }
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  && {
    display: flex;
    justify-content: center;
    width: 60%;
    height: 60%;
    margin-bottom: 18%;
  }
`;

export const StyledChatButton = styled(Button)`
  &&.customButton {
    height: 30%;
    width: auto;
    margin: auto 5px;
    color: ${(props) => props.theme.palette.primary.main};
    background-color: #ffff;
    font-size: 100px;
  }
  .MuiSvgIcon-root {
    font-size: 60%;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  && {
    font-size: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: silver;
  }
  &&.completed {
    color: yellow;
  }
`;

export const StyledTitleDialog = styled(DialogTitle)`
  &&.title {
    margin-bottom: 28px;
    font-size: 2rem;
    font-weight: bold;
    color: #7ac70c;
  }
`;

export const StyledDeleteTypography = styled(Typography)`
  &&.customTypo {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    margin-bottom: 45px;
  }
`;

export const StyledDeleteDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 35%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  }
`;

export const StyledDialogActions = styled(DialogActions)`
  && {
    justify-content: center;
    display: flex;
    gap: 8px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  &&.actionsDelete {
    justify-content: center;
    display: flex;
    gap: 8px;
    margin-bottom: 60px;
  }
`;

export const StyledDeleteButton = styled(Button)`
  && {
    margin: 0px 50px 20px;
    width: 120px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.deleteButton {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
  &&.deleteButton.disabled {
    background-color: #ccc;
    pointer-events: none;
    border: 1px solid #ccc;
  }
`;

export const StyledAddDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 40%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  }
`;

export const StyledTextField = styled(TextField)`
  &&.customTextField {
    width: 100%;
    padding: 2px;
    margin: 2px;
    border-radius: 4px;
  }
`;

export const StyledEditDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 40%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  }
`;

export const StyledButton1 = styled(Button)`
  && {
    width: 120px;
    margin: 30px 30px 0px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.containedButton {
    color: ${(props) => props.theme.palette.primary.contrastText};
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const StyledFinishTypography = styled(Typography)`
  &&.customTypo {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
    margin: 25px;
  }
  .MuiSvgIcon-root {
    color: #7ac70c;
  }
`;

export const StyledFinishDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 35%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    box-sizing: border-box;
  }
`;

export const StyledFinishDialogActions = styled(DialogActions)`
  && {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const StyledFinishButton = styled(Button)`
  && {
    margin: 20px;
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  &&.containedButton {
    color: ${(props) => props.theme.palette.primary.contrastText};
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;
