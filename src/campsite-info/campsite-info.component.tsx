import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { CampHeader } from './components/camp-header';
import { CampImages } from './components/camp-images';
import { CampMap } from './components/camp-map';
import { graphicsStyles, mapStyles, imageStyles } from './campsite-info.styles';

interface Campsite {
  images: string[];
  location: { lat: number; long: number };
  name: string;
  rating: number;
  uuid: string;
}

export const CampsiteInfo: FunctionComponent = () => {
  const [campsite, setCampsite] = useState<Campsite | null>(null);
  
  useEffect(() => {
    const dataGetter = async () => {
      const data = await axios.get(
        'http://localhost:3001/v1/camp-sites/:campSiteId'
      );
      const parsedData = JSON.parse(data.data);
      setCampsite(parsedData);
    };

    dataGetter();
  }, []);
  
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
          <CampImages images={ campsite?.images } />
        </Box>
      </Box>
    </div>
  );
};
