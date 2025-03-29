import React, { useContext } from 'react';
import { AuthContext } from '@src/checkAdminContext';
import { StyledBox, StyledTypography, StyledButton } from './index.style';

const Welcome = ({ onAddConversation }) => {
  const isAdmin = useContext(AuthContext);

  return (
    <StyledBox>
      <StyledTypography className="customTypo">
        Please create Conversation to chat.
      </StyledTypography>
      {isAdmin && (
        <StyledButton onClick={onAddConversation}>
          Create New Conversation
        </StyledButton>
      )}
      <StyledTypography className="ConversationTypo">
        Conversations
      </StyledTypography>
    </StyledBox>
  );
};

export default Welcome;
