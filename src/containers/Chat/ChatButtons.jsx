import React, { useContext } from 'react';
import { AuthContext } from '@src/checkAdminContext';
import { StyledButton, ButtonGrid } from './index.style';

const ChatButtons = ({
  chat,
  onEditChat,
  onDeleteChat,
  onReturn,
  onFinish,
}) => {
  const isAdmin = useContext(AuthContext);

  return (
    <ButtonGrid>
      {isAdmin && (
        <>
          <StyledButton onClick={() => onEditChat(chat)}>Edit</StyledButton>
          <StyledButton onClick={() => onDeleteChat(chat)}>Delete</StyledButton>
        </>
      )}
      <StyledButton className="containedButton" onClick={onFinish}>
        Finish
      </StyledButton>
      <StyledButton className="containedButton" onClick={onReturn}>
        Conversations
      </StyledButton>
    </ButtonGrid>
  );
};
export default ChatButtons;
