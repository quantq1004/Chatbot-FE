import React from 'react';
import {
  DialogActions,
  Typography,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import { StyledActionDialog } from './index.style';

const ActionDialog = ({
  image,
  title,
  description,
  open,
  width,
  maxWidth,
  onClose,
  actionComponents,
}) => (
  <StyledActionDialog
    open={open}
    width={width}
    maxWidth={maxWidth || 'xs'}
    fullWidth
    onClose={onClose}
  >
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
        <img src={image} alt="icon" className="img" />
      </div>
      <Typography className="title">{title}</Typography>
      <Typography className="description">{description}</Typography>
      {actionComponents && (
        <DialogActions classes={{ root: 'dialog-action' }}>
          {actionComponents}
        </DialogActions>
      )}
    </div>
  </StyledActionDialog>
);

export default ActionDialog;
