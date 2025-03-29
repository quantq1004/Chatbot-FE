import React from 'react';
import { DialogTitle, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { StyledDialog } from './index.style';

const Dialog = ({
  title,
  titleColor,
  subTitle,
  open,
  width,
  maxWidth,
  children,
  onClose,
  fullWidth = true,
  borderRadius = '5px',
  titleFontSize = '20px',
  titleFontWeight = '600',
}) => (
  <StyledDialog
    fullWidth={fullWidth}
    width={width}
    maxWidth={maxWidth}
    open={open}
    onClose={onClose}
    borderRadius={borderRadius}
    titleFontSize={titleFontSize}
    titleColor={titleColor}
    titleFontWeight={titleFontWeight}
  >
    <DialogTitle classes={{ root: 'dialog-title' }}>
      {title}
      <IconButton
        aria-label="close"
        onClick={onClose}
        color="secondary"
        className="close-button"
      >
        <Close color="secondary" />
      </IconButton>
      {subTitle && (
        <Typography className="sub-title" variant="body2">
          {subTitle}
        </Typography>
      )}
    </DialogTitle>
    {children}
  </StyledDialog>
);

export default Dialog;
