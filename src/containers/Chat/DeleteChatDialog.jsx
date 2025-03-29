import React, { useState, useEffect } from 'react';
import { DialogContent, TextField } from '@mui/material';
import {
  StyledDeleteTypography,
  StyledTitleDialog,
  StyledDeleteDialog,
  StyledDialogActions,
  StyledDeleteButton,
} from './index.style';

const DialogDelete = ({ open, onClose, selectedChat, onDelete }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmedChange = (e) => {
    if (e.target.value === selectedChat.name) {
      setConfirmed(true);
      return;
    }
    setConfirmed(false);
  };

  const handleClose = () => {
    onClose();
    setConfirmed(false);
  };

  useEffect(() => {
    if (open) setConfirmed(false);
  }, [open]);

  return (
    <StyledDeleteDialog open={open} onClose={onClose}>
      <StyledTitleDialog className="title">Delete Chat</StyledTitleDialog>
      <DialogContent>
        <StyledDeleteTypography className="customTypo">
          To delete the chat &quot;{selectedChat?.name}&quot;, type the name to
          confirm.
        </StyledDeleteTypography>
        <TextField
          label="Enter Name"
          onChange={handleConfirmedChange}
          fullWidth
        />
      </DialogContent>
      <StyledDialogActions className="actionsDelete">
        <StyledDeleteButton onClick={handleClose}>Cancel</StyledDeleteButton>
        <StyledDeleteButton
          onClick={onDelete}
          className={`deleteButton ${!confirmed ? 'disabled' : ''}`}
          disabled={!confirmed}
        >
          Delete
        </StyledDeleteButton>
      </StyledDialogActions>
    </StyledDeleteDialog>
  );
};

export default DialogDelete;
