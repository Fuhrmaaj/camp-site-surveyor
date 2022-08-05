import React from 'react';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { GetLabelText } from './camp-rating.utils';
import { DisplayLabelText } from './display-label-text.component';
import { ratingStyles } from './camp-rating.styles';

export const StarRating = () => {
  const [value, setValue] = React.useState<number | null>(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box sx={ratingStyles}>
      <Rating
        name="hover-feedback"
        value={value}
        getLabelText={GetLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && DisplayLabelText(value, hover)}
    </Box>
  );
};
