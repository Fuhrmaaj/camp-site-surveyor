import React, { FunctionComponent } from 'react';
import { type CampHeaderProps } from '.';
import { Button, Box } from '@mui/material';
import { headerStyles, navStyles } from './camp-header.styles';
import { StarRating } from '../camp-rating';

export const CampHeader: FunctionComponent<CampHeaderProps> = ({ region, park, zone, site, logout }) => {
  return (
    <Box sx={headerStyles} component="header">
      <Box sx={navStyles} component="nav">
        <div>{region}/{park}/{zone}/{site}</div>
        <StarRating />
        <Button onClick={logout}>Logout</Button>
      </Box>
    </Box>
  );
};
