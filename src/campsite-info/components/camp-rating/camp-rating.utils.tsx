import React from 'react';
import { tooltipLabels } from './camp-rating.constants';
import { Box } from '@mui/material';
import { tooltipStyles } from './camp-rating.styles';

export const GetLabelText = (value: number) => {
  return `${value} Star${value !== 1 ? 's' : ''}, ${tooltipLabels[value]}`;
};

export const DisplayLabelText = (value: number, hover: number) => {
  return (
    <Box sx={tooltipStyles}>
      {tooltipLabels[hover !== -1 ? hover : value]}
    </Box>
  );
};
