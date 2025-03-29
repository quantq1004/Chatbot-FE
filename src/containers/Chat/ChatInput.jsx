import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { createChat } from '@src/apis/chat';
import { TextField } from '@mui/material';
import { StyledButton, StyledBox } from './index.style';

const ChatInput = ({ conversationId, fetchChats }) => {
  const [message, setMessage] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const response = await createChat({
      userPrompt: message,
      aiResponse: '...', // Placeholder for AI response
      conversationId,
    });

    if (response) {
      enqueueSnackbar('Message sent successfully', { variant: 'success' });
      setMessage('');
      fetchChats(); // Refresh chat list
    } else {
      enqueueSnackbar('Failed to send message', { variant: 'error' });
    }
  };

  return (
    <StyledBox>
      <TextField
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <StyledButton onClick={handleSendMessage}>Send</StyledButton>
    </StyledBox>
  );
};

export default ChatInput;
