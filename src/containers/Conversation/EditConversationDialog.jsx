import React, { useState } from 'react';
import { DialogContent, Grid } from '@mui/material';
import {
  StyledDialog,
  StyledTitleDialog,
  StyledDialogActions,
  StyledButton,
  StyledTextField,
} from './index.style';

const DialogEditConversation = ({
  open,
  onClose,
  title,
  onTitleChange,
  onSubmitEdit,
}) => {
  const [titleError, setTitleError] = useState('');

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!title) {
      setTitleError('Title is required');
      hasError = true;
    } else setTitleError('');

    if (!hasError) onSubmitEdit(e);
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledTitleDialog className="title">Edit Conversation</StyledTitleDialog>
      <DialogContent>
        <form onSubmit={handleSubmitEdit}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Title"
                value={title}
                onChange={onTitleChange}
                className="customTextField"
                error={!!titleError}
                helperText={titleError}
              />
            </Grid>
          </Grid>
          <StyledDialogActions>
            <StyledButton onClick={onClose} className="customButton">
              Cancel
            </StyledButton>
            <StyledButton type="submit" className="containedButton">
              Edit
            </StyledButton>
          </StyledDialogActions>
        </form>
      </DialogContent>
    </StyledDialog>
  );
};

export default DialogEditConversation;
