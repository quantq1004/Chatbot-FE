import React, { useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { StyledNewConfirmDialog } from './index.style';

const NewConfirmDialog = ({
  open,
  title,
  description,
  leftButtonMessage,
  rightButtonMessage,
  width,
  maxWidth,
  className,
  onClose,
  onHandleLeftButton = () => {},
  onHandleRightButton = () => {},
}) => {
  const isSingleButton = !leftButtonMessage || !rightButtonMessage;

  const [leftLoading, setLeftLoading] = useState(false);

  const handleLeftButton = async () => {
    setLeftLoading(true);
    await onHandleLeftButton();
    setLeftLoading(false);
  };

  return (
    <StyledNewConfirmDialog
      open={open}
      width={width}
      maxWidth={maxWidth || 'xs'}
      fullWidth
      onClose={onClose}
      className={className}
    >
      <Box className="wrapper">
        <Box className="title-wrapper ">
          <Typography className="title-content">{title}</Typography>
        </Box>
        <Divider />
        <Box className="content-wrapper">
          <Typography
            className="content"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Box>
        <Box className={`action ${isSingleButton && 'single'}`}>
          {leftButtonMessage && (
            <LoadingButton
              className="action-button left-button"
              onClick={handleLeftButton}
              variant="outlined"
              loading={leftLoading}
              disabled={leftLoading}
            >
              {leftLoading ? '' : leftButtonMessage}
            </LoadingButton>
          )}
          {rightButtonMessage && (
            <Button
              className="action-button right-button"
              onClick={onHandleRightButton}
              variant="contained"
              color="primary"
              autoFocus
            >
              {rightButtonMessage}
            </Button>
          )}
        </Box>
      </Box>
    </StyledNewConfirmDialog>
  );
};

export default NewConfirmDialog;
