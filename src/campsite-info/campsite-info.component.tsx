import React, { FunctionComponent } from 'react';
import { CampHeader } from './components/camp-header';
import { CampImages } from './components/camp-images';
import { SiteMap } from './components/camp-map';
import { Box } from '@mui/material';
import { graphicsStyles, mapStyles, imageStyles } from './campsite-info.styles'

export const CampsiteInfo: FunctionComponent = () => {
    return (
        <div>
            <CampHeader region="region" park="park" zone="zone" site="site" logout={() => {}}/> {/* eslint-disable-line @typescript-eslint/no-empty-function */}
            <Box sx={graphicsStyles} component="div">
                <Box sx={mapStyles} component="div">
                    <SiteMap />
                </Box>
                <Box sx={imageStyles} component="div">
                    <CampImages />
                </Box>
            </Box>
        </div>
    );
};
