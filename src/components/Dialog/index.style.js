import { styled } from '@mui/material/styles';
import { Dialog } from '@mui/material';
import { COLOR } from '@src/styles/color';
import BlinkImg from '@src/assets/images/blink.png';

const StyledDialog = styled(Dialog)`
  min-width: ${(props) => props.width || 'auto'};

  .MuiDialog-paper {
    border-radius: ${(props) => `${props.borderRadius} !important` || '5px'};
  }

  .dialog-title {
    text-align: center;
    margin: 8px;
    font-size: ${(props) => `${props.titleFontSize} !important` || '20px'};
    font-weight: ${(props) => `${props.titleFontWeight} !important` || '500'};
    color: ${(props) => `${props.titleColor} !important` || COLOR.dark};
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .sub-title {
    color: ${COLOR.dark};
    margin: 5px 0;
  }
`;

const StyledActionDialog = styled(Dialog)`
  min-width: ${(props) => props.width || 'auto'};

  .dialog-title {
    text-align: center;
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .dialog-wrapper {
    padding: 10px 30px 23px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
  }

  .img {
    width: 100px;
    height: 100px;
  }

  .title {
    font-size: 21px;
    margin-bottom: 10px;
    font-weight: 500;
    text-align: center;
  }

  .description {
    font-size: 14px;
    text-align: center;
  }

  .dialog-action {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

const StyledNotificationSuccess = styled(Dialog)`
  min-width: ${(props) => props.width || 'auto'};

  .dialog-content {
    background-image: url(${BlinkImg});
    background-repeat: no-repeat, repeat;
  }

  .dialog-title {
    text-align: center;
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .dialog-wrapper {
    padding: 10px 30px 23px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
  }

  .img {
    // width: 185px;
    height: 145px;
  }

  .title {
    margin-bottom: 10px;
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }

  .description {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }

  .dialog-action {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .action-button {
    text-transform: normal;
  }

  .img-button {
    width: 26px;
    height: 26px;
  }
`;

const StyledSimpleDialog = styled(Dialog)`
  .title {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;

    .title-text {
      font-weight: 700;
      font-size: 20px;
    }
  }

  .description {
    color: ${COLOR.dark};
    line-height: 20px;
  }
`;

const StyledNewConfirmDialog = styled(Dialog)`
  .MuiDialog-paper {
    max-width: 580px;
    border-radius: 16px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 16px 32px 32px 32px;
    gap: 16px;
  }

  .title-content {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    color: ${COLOR.indigo[100]};
  }

  .content {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: ${COLOR.black.default};
  }

  .action {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 8px;

    .action-button {
      text-transform: none;
      height: 40px;
      padding: 8px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      letter-spacing: -0.4px;
      border-radius: 500px;
    }

    .single {
      display: flex;
      justify-content: center !important;
    }

    .left-button {
      border: 1px solid ${COLOR.indigo[32]};
      color: ${COLOR.indigo[100]};
      width: 100%;
    }

    .right-button {
      border: 1px solid ${COLOR.yellow.default};
      background-color: ${COLOR.yellow.default};
      color: ${COLOR.indigo[100]};
      width: 100%;
    }
  }
`;

export {
  StyledDialog,
  StyledActionDialog,
  StyledNotificationSuccess,
  StyledSimpleDialog,
  StyledNewConfirmDialog,
};
