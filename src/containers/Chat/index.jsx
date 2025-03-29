import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Box,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { getChats, createChat } from '@src/apis/chat';
import { useSnackbar } from 'notistack';
import Header from '@src/components/Header';
import Sidebar from '@src/components/Sidebar';
import styled from 'styled-components';
import { getConversation } from '@src/apis/conversation';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '../../configs';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

const OuterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #e0e0e0;
  padding-top: 200px;
`;

const ChatWrapper = styled(Box)`
  width: 50%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ChatContainer = styled(Box)`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
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

const ChatInputContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: white;
  border-top: 1px solid #ddd;
`;

const InputField = styled(TextField)`
  flex: 1;
  margin-right: 8px;
`;

const ChatPage = ({ conversationId }) => {
  const [chats, setChats] = useState([]);
  const [activeConversationId, setActiveConversationId] =
    useState(conversationId);
  const [conversation, setConversation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const fetchChats = async () => {
    setLoading(true);
    const response = await getChats(conversationId);
    if (!response) {
      enqueueSnackbar('Failed to fetch chats', { variant: 'error' });
      setLoading(false);
      return;
    }
    setChats(response.result?.chats || []);
    setLoading(false);
  };

  const fetchConversation = async () => {
    const response = await getConversation(conversationId);
    if (!response) {
      enqueueSnackbar('Failed to fetch conversation', { variant: 'error' });
      return;
    }
    setConversation(response.result?.conversation || null);
  };

  useEffect(() => {
    if (activeConversationId) {
      fetchConversation();
      fetchChats();
    }
  }, [activeConversationId]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const tempChat = {
      userPrompt: message,
      aiResponse: 'Processing...',
      conversationId,
    };
    setChats((prevChats) => [...prevChats, tempChat]);
    setMessage('');

    try {
      const result = await model.generateContent(message);
      const responseText = result.response.text();

      await createChat({
        userPrompt: message,
        aiResponse: responseText,
        conversationId,
      });
      setChats((prevChats) =>
        prevChats.map((chat, index) =>
          index === prevChats.length - 1
            ? { ...chat, aiResponse: responseText }
            : chat,
        ),
      );
    } catch (error) {
      enqueueSnackbar('Failed to get AI response', { variant: 'error' });
    }
  };

  return (
    <OuterContainer>
      <CssBaseline />
      <Header />
      <Sidebar onSelectConversation={setActiveConversationId} />
      <ChatWrapper>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ padding: 2 }}
        >
          {conversation ? conversation.title : 'Chat'}
        </Typography>
        <ChatContainer>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            chats.map((chat, index) => (
              <React.Fragment key={chat.id || index}>
                <UserMessage>
                  <Typography variant="body1">{chat.userPrompt}</Typography>
                </UserMessage>
                <BotMessage>
                  <Typography variant="body1">{chat.aiResponse}</Typography>
                </BotMessage>
              </React.Fragment>
            ))
          )}
        </ChatContainer>
        <ChatInputContainer>
          <InputField
            variant="outlined"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </ChatInputContainer>
      </ChatWrapper>
    </OuterContainer>
  );
};

export default ChatPage;
