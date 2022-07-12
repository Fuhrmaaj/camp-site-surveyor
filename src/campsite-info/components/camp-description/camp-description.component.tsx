import React from 'react';
import { Box } from '@mui/material';
import { descriptionStyles } from './camp-description.styles';

export const CampDescription = () => {
  return (
    <Box sx={descriptionStyles} component="body">
      <h2>Description</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
        sapien at mauris pulvinar congue. Nulla pulvinar arcu nulla, nec laoreet
        tellus mollis finibus. Vivamus velit felis, tristique ac nisi sed,
        feugiat cursus lacus. Donec varius nisi sed ante fringilla, sit amet
        pretium est volutpat. Integer eleifend magna id tellus rhoncus ornare.
        Vivamus at euismod augue. Suspendisse hendrerit varius euismod. Nam
        tempor turpis eget vulputate blandit. Aliquam erat volutpat. Praesent at
        aliquet velit. Morbi consectetur, neque eu auctor efficitur, velit velit
        dictum risus, non venenatis erat elit vitae erat.
      </p>
    </Box>
  );
};
