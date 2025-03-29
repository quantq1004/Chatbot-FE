import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  Button,
} from '@mui/material';

const ConfirmDialog = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
  disableClose,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={!disableClose && onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {!disableClose && (
          <Button variant="outlined" color="primary" onClick={onClose}>
            {t('cancel')}
          </Button>
        )}
        <Button variant="contained" color="primary" onClick={onConfirm}>
          {t('agree')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
