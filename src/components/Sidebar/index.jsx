import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import { MoreVert, Edit, Delete } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  getConversations,
  updateConversation,
  deleteConversation,
} from '@src/apis/conversation';
import { useSnackbar } from 'notistack';
import styled from 'styled-components';

// ====== Styled Component ======
const SidebarContainer = styled(Box)`
  width: 300px;
  background: #ffffff;
  border-right: 1px solid #ddd;
  padding: 16px;
  overflow-y: auto;
`;

const Sidebar = ({ onSelectConversation }) => {
  const [conversations, setConversations] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedConv, setSelectedConv] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const fetchConversations = async () => {
    try {
      const response = await getConversations();
      if (response) {
        const conversationsArray = response?.result?.conversations || [];
        conversationsArray.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
        );
        setConversations(conversationsArray);
      } else {
        enqueueSnackbar('Failed to fetch conversations', { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar('Error fetching conversations', { variant: 'error' });
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const handleSelectConversation = (conversationId) => {
    onSelectConversation(conversationId);
    navigate(`/${conversationId}`);
  };

  // Mở menu khi click icon MoreVert
  const handleMenuOpen = (event, conversation) => {
    setAnchorEl(event.currentTarget);
    setSelectedConv(conversation);
  };

  // Đóng menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Mở dialog chỉnh sửa tiêu đề
  const handleEditClick = () => {
    setEditTitle(selectedConv.title);
    setOpenEditDialog(true);
    handleMenuClose();
  };

  // Đóng dialog chỉnh sửa
  const handleEditClose = () => {
    setOpenEditDialog(false);
    setSelectedConv(null);
  };

  // Cập nhật tiêu đề cuộc trò chuyện
  const handleUpdateConversation = async () => {
    try {
      await updateConversation(selectedConv.id, editTitle);
      enqueueSnackbar('Conversation updated successfully', {
        variant: 'success',
      });
      fetchConversations();
    } catch (error) {
      enqueueSnackbar('Failed to update conversation', { variant: 'error' });
    }
    handleEditClose();
  };

  // Xóa cuộc trò chuyện
  const handleDeleteConversation = async () => {
    try {
      await deleteConversation(selectedConv.id);
      enqueueSnackbar('Conversation deleted successfully', {
        variant: 'success',
      });
      navigate('/');
    } catch (error) {
      enqueueSnackbar('Failed to delete conversation', { variant: 'error' });
    }
    handleMenuClose();
  };

  return (
    <SidebarContainer style={{ borderRadius: '12px' }}>
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ alignSelf: 'flex-start', margin: '6px' }}
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
      >
        Back
      </Button>
      <Typography variant="h6">Conversations</Typography>
      <List>
        {conversations.map((conv) => (
          <React.Fragment key={conv.id}>
            <ListItem button onClick={() => handleSelectConversation(conv.id)}>
              <ListItemText primary={conv.title} />
              <IconButton onClick={(e) => handleMenuOpen(e, conv)}>
                <MoreVert />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEditClick}>
          <Edit fontSize="small" /> Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteConversation}>
          <Delete fontSize="small" /> Delete
        </MenuItem>
      </Menu>

      <Dialog open={openEditDialog} onClose={handleEditClose}>
        <DialogTitle>Edit Conversation Title</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdateConversation} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </SidebarContainer>
  );
};

export default Sidebar;

// eslint-disable-next-line no-lone-blocks
{
  /* <ListItem
button
onClick={() => handleSelectConversation(conv.id)}
sx={{
  backgroundColor:
    selectedConversationId === conv.id ? 'skyblue' : 'secondary',
  color:
    selectedConversationId === conv.id ? 'primary' : 'inherit',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor:
      selectedConversationId === conv.id
        ? 'deepskyblue'
        : '#f0f0f0',
  },
  borderRadius: '8px',
}}
> */
}
