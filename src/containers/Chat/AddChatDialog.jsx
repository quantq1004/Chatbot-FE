import React, { useState } from 'react';
import { DialogContent, Grid } from '@mui/material';
import { createChat } from '@src/apis/chat';
import {
  StyledAddDialog,
  StyledTitleDialog,
  StyledDialogActions,
  StyledButton1,
  StyledTextField,
} from './index.style';

const DialogAddChat = ({ open, onClose, ConversationId, fetchChats }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    imageURL: '',
    desc: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.imageURL) newErrors.imageURL = 'Image URL is required';
    if (!formValues.desc) newErrors.desc = 'Description is required';
    return newErrors;
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const response = await createChat({ ...formValues, ConversationId });
    if (response?.status === 0) {
      setErrors({ form: response.message });
    } else {
      setFormValues({ name: '', imageURL: '', desc: '' });
      fetchChats(ConversationId);
      onClose();
    }
  };

  return (
    <StyledAddDialog open={open} onClose={onClose}>
      <StyledTitleDialog className="title">Add Chat</StyledTitleDialog>
      <DialogContent>
        <form onSubmit={handleCreate}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="customTextField"
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Image URL"
                name="imageURL"
                value={formValues.imageURL}
                onChange={handleChange}
                className="customTextField"
                error={Boolean(errors.imageURL)}
                helperText={errors.imageURL}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Description"
                name="desc"
                value={formValues.desc}
                onChange={handleChange}
                className="customTextField"
                error={Boolean(errors.desc)}
                helperText={errors.desc}
              />
            </Grid>
          </Grid>
          <StyledDialogActions>
            <StyledButton1 onClick={onClose}>Cancel</StyledButton1>
            <StyledButton1 type="submit" className="containedButton">
              Add
            </StyledButton1>
          </StyledDialogActions>
        </form>
      </DialogContent>
    </StyledAddDialog>
  );
};

export default DialogAddChat;
