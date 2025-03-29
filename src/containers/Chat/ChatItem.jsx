import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const ChatContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const MessageBox = styled(Box)`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 12px;
  word-wrap: break-word;
`;

const UserMessage = styled(MessageBox)`
  align-self: flex-end;
  background-color: #0084ff;
  color: white;
  text-align: right;
`;

const BotMessage = styled(MessageBox)`
  align-self: flex-start;
  background-color: #f1f0f0;
  color: black;
`;

const ChatItem = ({ chat }) => (
  <ChatContainer>
    <UserMessage>
      <Typography variant="body1">{chat.userPrompt}</Typography>
    </UserMessage>
    <BotMessage>
      <Typography variant="body1">{chat.aiResponse}</Typography>
    </BotMessage>
  </ChatContainer>
);

export default ChatItem;
