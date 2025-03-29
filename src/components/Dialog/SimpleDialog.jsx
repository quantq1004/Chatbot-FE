import { Warning } from '@mui/icons-material';
import { COLOR } from '@src/styles/color';
import React from 'react';
import { StyledSimpleDialog } from './index.style';

const SimpleDialog = ({
  open,
  width,
  maxWidth,
  className,
  onClose,
  title,
  description,
  actionComponents,
  PaperProps,
}) => (
  <StyledSimpleDialog
    open={open}
    width={width}
    maxWidth={maxWidth || 'xs'}
    fullWidth
    onClose={onClose}
    PaperProps={PaperProps}
    className={className}
  >
    {title && (
      <div className="title">
        <Warning sx={{ color: COLOR.alert }} />
        <span className="title-text">{title}</span>
      </div>
    )}
    <div className="content">
      <div
        className="description"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      {actionComponents}
    </div>
  </StyledSimpleDialog>
);

export default SimpleDialog;
