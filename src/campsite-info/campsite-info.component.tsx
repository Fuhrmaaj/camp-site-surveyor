import React, { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import { CampHeader } from './components/camp-header';
import { CampImages } from './components/camp-images';
import { CampMap } from './components/camp-map';
import { graphicsStyles, mapStyles, imageStyles } from './campsite-info.styles';

export const CampsiteInfo: FunctionComponent = () => {
  return (
    <div>
      <CampHeader
              region="region"
              park="park"
              zone="zone"
              site="site"
              logout={() => undefined}
      />
      <Box sx={graphicsStyles} component="div">
        <Box sx={mapStyles} component="div">
          <CampMap />
        </Box>
        <Box sx={imageStyles} component="div">
          <CampImages />
        </Box>
      </Box>
    </div>
  );
};
