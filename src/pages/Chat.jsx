import React from 'react';
import { useParams } from 'react-router-dom';
import ChatContainer from '../containers/Chat/index';

const Chat = () => {
  const { conversationId } = useParams();
  return <ChatContainer conversationId={conversationId} />;
};

export default Chat;
