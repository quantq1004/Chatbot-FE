import React, { useState, useEffect } from 'react';
import { DialogContent, Grid } from '@mui/material';
import { updateChat } from '@src/apis/chat';
import {
  StyledEditDialog,
  StyledTitleDialog,
  StyledDialogActions,
  StyledButton1,
  StyledTextField,
} from './index.style';

const DialogEditChat = ({
  open,
  onClose,
  selectedChat,
  ConversationId,
  fetchChats,
}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    imageURL: '',
    desc: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedChat) {
      setFormValues({
        name: selectedChat.name || '',
        imageURL: selectedChat.imageUrl || '',
        desc: selectedChat.desc || '',
      });
    }
  }, [selectedChat]);

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

  const handleEdit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const response = await updateChat({
      chatId: selectedChat.id,
      ...formValues,
    });

    if (response?.status === 0) {
      setErrors({ form: response.message });
    } else {
      fetchChats(ConversationId);
      onClose();
    }
  };

  return (
    <StyledEditDialog open={open} onClose={onClose}>
      <StyledTitleDialog className="title">Edit Chat</StyledTitleDialog>
      <DialogContent>
        <form onSubmit={handleEdit}>
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
              Edit
            </StyledButton1>
          </StyledDialogActions>
        </form>
      </DialogContent>
    </StyledEditDialog>
  );
};

export default DialogEditChat;
