import React from 'react';
import { StyledTypography } from './index.style';

const Copyright = () => (
  <StyledTypography>
    {'Copyright © '}
    {new Date().getFullYear()} TQ JSC. All rights reserved.
  </StyledTypography>
);

export default Copyright;
