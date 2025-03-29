import React, { useState, useEffect } from 'react';
import { DialogContent, TextField } from '@mui/material';
import {
  StyledTypography,
  StyledDeleteDialog,
  StyledTitleDialog,
  StyledDialogActions,
  StyledDeleteButton,
} from './index.style';

const DialogDelete = ({ open, onClose, selectedItem, onDelete }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmedChange = (e) => {
    if (e.target.value === selectedItem.title) {
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
      <StyledTitleDialog className="title">
        Delete conversation
      </StyledTitleDialog>
      <DialogContent>
        <StyledTypography className="deleteConversationTypo">
          To delete the Conversation &quot;{selectedItem?.title}&quot;, type the
          name to confirm.
        </StyledTypography>
        <TextField
          label="Conversation Name"
          onChange={handleConfirmedChange}
          fullWidth
        />
      </DialogContent>
      <StyledDialogActions>
        <StyledDeleteButton onClick={handleClose}>Cancel</StyledDeleteButton>
        <StyledDeleteButton
          onClick={onDelete}
          variant="contained"
          className={` deleteButton ${!confirmed ? 'disabled' : ''}`}
          disabled={!confirmed}
        >
          Delete
        </StyledDeleteButton>
      </StyledDialogActions>
    </StyledDeleteDialog>
  );
};

export default DialogDelete;
