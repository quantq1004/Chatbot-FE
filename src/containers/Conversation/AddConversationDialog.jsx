import React, { useState } from 'react';
import { DialogContent, Grid } from '@mui/material';
import { COLOR } from '@src/styles/color';
import Dialog from '@src/components/Dialog';
import {
  StyledDialogActions,
  StyledButton,
  StyledTextField,
} from './index.style';

const DialogAddConversation = ({
  open,
  onClose,
  title,
  onTitleChange,
  onSubmitAdd,
}) => {
  const [titleError, setTitleError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!title) {
      setTitleError('Title is required');
      hasError = true;
    } else {
      setTitleError('');
    }

    if (!hasError) onSubmitAdd(e);
  };

  const handleClose = () => {
    onClose();
    setTitleError('');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title="Create Conversation"
      maxWidth="sm"
      titleColor={COLOR.greenV2}
    >
      <DialogContent>
        <form onSubmit={handleSubmit}>
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
            <StyledButton onClick={handleClose} className="secondButton">
              Cancel
            </StyledButton>
            <StyledButton type="submit" className="mainButton">
              Add
            </StyledButton>
          </StyledDialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddConversation;
