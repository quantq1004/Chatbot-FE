import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Grid, CssBaseline, Typography } from '@mui/material';
import {
  getConversations,
  createConversation,
  updateConversation,
  deleteConversation,
} from '@src/apis/conversation';
import Header from '@src/components/Header';
// import Footer from '@src/components/Footer';
import Welcome from '@src/components/Welcome';
import ConversationItem from './ConversationItem';
import AddConversationDialog from './AddConversationDialog';
import EditConversationDialog from './EditConversationDialog';
import DeleteConversationDialog from './DeleteConversationDialog';
import { StyledContainer } from './index.style';

const ConversationContainer = () => {
  const [conversations, setConversations] = useState([]);
  const [title, setTitle] = useState('');
  const [openCreate, setOpenCreate] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const fetchConversations = async () => {
    setLoading(true);
    const response = await getConversations();
    if (!response) {
      enqueueSnackbar('Get conversations failed', { variant: 'error' });
      setLoading(false);
      return;
    }
    const conversationsArray = response?.result?.conversations || [];
    conversationsArray.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
    );
    setConversations(conversationsArray);
    setLoading(false);
  };

  const handleOpenCreate = () => setOpenCreate(true);

  const handleCloseCreate = () => setOpenCreate(false);

  const handleAddConversation = () => handleOpenCreate();

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title) {
      handleCloseCreate();
      return;
    }
    const response = await createConversation(title);
    if (response?.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    const newConversationId = response?.result?.conversation?.id;
    if (newConversationId) {
      navigate(`/${newConversationId}`);
    }
    setTitle('');
    handleCloseCreate();
  };

  const handleOpenEdit = () => setOpenEdit(true);

  const handleCloseEdit = () => setOpenEdit(false);

  const handleEditConversation = (conversation) => {
    setSelectedConversation(conversation);
    setEditTitle(conversation.title);
    handleOpenEdit();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!editTitle) {
      handleCloseEdit();
      return;
    }
    const response = await updateConversation(
      selectedConversation.id,
      editTitle,
    );
    if (response?.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    setEditTitle('');
    fetchConversations();
    handleCloseEdit();
  };

  const handleOpenDelete = (conversation) => {
    setSelectedConversation(conversation);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setSelectedConversation(null);
    setOpenDelete(false);
  };

  const handleDelete = async () => {
    const response = await deleteConversation(selectedConversation.id);
    if (response?.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    fetchConversations();
    handleCloseDelete();
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Welcome onAddConversation={handleAddConversation} />
      <StyledContainer>
        {loading && <Typography>Loading...</Typography>}
        {!loading && (
          <Grid container spacing={4}>
            {conversations &&
              conversations.map((conversation) => (
                <ConversationItem
                  key={conversation.id}
                  conversation={conversation}
                  onEditConversation={handleEditConversation}
                  onDeleteConversation={handleOpenDelete}
                />
              ))}
          </Grid>
        )}
      </StyledContainer>
      <>
        <AddConversationDialog
          open={openCreate}
          onClose={handleCloseCreate}
          title={title}
          onTitleChange={(e) => setTitle(e.target.value)}
          onSubmitAdd={handleCreate}
        />
        <EditConversationDialog
          open={openEdit}
          onClose={handleCloseEdit}
          title={editTitle}
          onTitleChange={(e) => setEditTitle(e.target.value)}
          onSubmitEdit={handleEdit}
        />
        <DeleteConversationDialog
          open={openDelete}
          onClose={handleCloseDelete}
          selectedItem={selectedConversation}
          onDelete={handleDelete}
        />
      </>
    </>
  );
};

export default ConversationContainer;
