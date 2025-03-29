import React from 'react';
import { List } from '@mui/material';
import {
  LocationOn,
  Email,
  Smartphone,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import {
  StyledBox,
  StyledTypography,
  StyledTypography1,
  StyledDivider,
} from './index.style';
import Copyright from '../Copyright';

const Footer = () => (
  <StyledBox className="customBox">
    <StyledTypography className="customTypo">
      Website to learn English through flashcards
    </StyledTypography>
    <StyledBox className="newBox">
      <List>
        <StyledTypography className="titleTypo">General</StyledTypography>
        <StyledTypography>Home</StyledTypography>
        <StyledTypography>Service</StyledTypography>
        <StyledTypography>Products</StyledTypography>
        <StyledTypography>Field</StyledTypography>
        <StyledTypography>Developer</StyledTypography>
        <StyledTypography>Document</StyledTypography>
      </List>
      <List>
        <StyledTypography className="titleTypo">Contact</StyledTypography>
        <StyledBox>
          <LocationOn />
          <StyledTypography1>Hai Ba Trung, Ha Noi</StyledTypography1>
        </StyledBox>
        <StyledBox>
          <Email />
          <StyledTypography1>contact@tq.vn</StyledTypography1>
        </StyledBox>
        <StyledBox>
          <Smartphone />
          <StyledTypography1>Support: 0999999999</StyledTypography1>
        </StyledBox>
        <StyledBox>
          <Phone />
          <StyledTypography1>Hotline: 0123456789</StyledTypography1>
        </StyledBox>
      </List>
      <List>
        <StyledTypography className="titleTypo">Follow us</StyledTypography>
        <StyledBox>
          <Facebook />
          <StyledTypography1>Facebook</StyledTypography1>
        </StyledBox>
        <StyledBox>
          <Instagram />
          <StyledTypography1>Instagram</StyledTypography1>
        </StyledBox>
        <StyledBox>
          <YouTube />
          <StyledTypography1>YouTube</StyledTypography1>
        </StyledBox>
        <StyledBox>
          <Twitter />
          <StyledTypography1> Twitter</StyledTypography1>
        </StyledBox>
        <StyledBox>
          <LinkedIn />
          <StyledTypography1>LinkedIn</StyledTypography1>
        </StyledBox>
      </List>
      <List>
        <StyledTypography>Terms of use</StyledTypography>
        <StyledTypography>Accessibility</StyledTypography>
        <StyledTypography>Privacy and cookies</StyledTypography>
        <StyledTypography>Affiliate programme</StyledTypography>
        <StyledTypography>Getting started</StyledTypography>
        <StyledTypography>Sitemap</StyledTypography>
        <StyledTypography>Frequently asked questions</StyledTypography>
      </List>
    </StyledBox>
    <StyledDivider />
    <Copyright />
  </StyledBox>
);

export default Footer;
