import React, { useContext } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@src/checkAdminContext';
import { Edit, Delete, Visibility, Star } from '@mui/icons-material';

const ConversationItem = ({
  conversation,
  onEditConversation,
  onDeleteConversation,
}) => {
  const isAdmin = useContext(AuthContext);
  const navigate = useNavigate();
  const handleViewConversation = () => navigate(`/${conversation.id}`);

  // eslint-disable-next-line arrow-body-style
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <ListItem divider>
      <ListItemAvatar>
        <Star color="primary" />
      </ListItemAvatar>
      <ListItemText
        primary={conversation.title}
        secondary={`Created: ${formatDate(
          conversation.createdAt,
        )} - Updated: ${formatDate(conversation.updatedAt)}`}
        onClick={handleViewConversation}
        sx={{ cursor: 'pointer' }}
      />
      <IconButton onClick={handleViewConversation} color="primary">
        <Visibility />
      </IconButton>
      {isAdmin && (
        <>
          <IconButton
            onClick={() => onEditConversation(conversation)}
            color="secondary"
          >
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => onDeleteConversation(conversation)}
            color="error"
          >
            <Delete />
          </IconButton>
        </>
      )}
    </ListItem>
  );
};

export default ConversationItem;
