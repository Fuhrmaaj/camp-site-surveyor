import React from 'react';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'
import { ratingStyles, tooltipStyles } from './camp-rating.styles';

const tooltipLabels: { [index: string]: string} = {
  1: "Terrible",
  2: "Bad",
  3: "Average",
  4: "Good",
  5: "Awesome!",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${tooltipLabels[value]}`;
}

export const StarRating = () => {
  const [value, setValue] = React.useState<number | null>(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box sx={ratingStyles} >
      <Rating
        name="hover-feedback"
        value={value}
        getLabelText = {getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55}} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={tooltipStyles}>
          {tooltipLabels[hover !== -1 ? hover: value]}
        </Box>
      )}
    </Box>
  );
}
