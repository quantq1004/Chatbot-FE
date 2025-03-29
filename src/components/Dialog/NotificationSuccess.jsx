import React from 'react';
import {
  DialogActions,
  Typography,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import GiftImg from '@src/assets/images/gift.jpg';

import { StyledNotificationSuccess } from './index.style';

const NotificationSuccess = ({
  title,
  description,
  open,
  width,
  maxWidth,
  actionComponent,
  onClose,
}) => (
  <StyledNotificationSuccess
    open={open}
    width={width}
    maxWidth={maxWidth || 'sm'}
    fullWidth
    onClose={onClose}
  >
    <div className="dialog-content">
      <DialogTitle classes={{ root: 'dialog-title' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          color="secondary"
          className="close-button"
        >
          <Close color="secondary" />
        </IconButton>
      </DialogTitle>
      <div className="dialog-wrapper">
        <div className="img-wrapper">
          <img src={GiftImg} alt="icon" className="img" />
        </div>
        <Typography className="title">{title}</Typography>
        <div
          className="description"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {actionComponent && (
          <DialogActions classes={{ root: 'dialog-action' }}>
            {actionComponent}
          </DialogActions>
        )}
      </div>
    </div>
  </StyledNotificationSuccess>
);

export default NotificationSuccess;
