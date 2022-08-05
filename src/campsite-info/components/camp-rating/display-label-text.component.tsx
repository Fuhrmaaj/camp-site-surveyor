import React from 'react';
import { Box } from '@mui/material';
import { tooltipStyles } from './camp-rating.styles';
import { tooltipLabels } from './camp-rating.constants';

export const DisplayLabelText = (value: number, hover: number) => {
  return (
    <Box sx={tooltipStyles}>{tooltipLabels[hover !== -1 ? hover : value]}</Box>
  );
};
