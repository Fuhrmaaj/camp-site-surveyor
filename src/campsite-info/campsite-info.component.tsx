import React, { FunctionComponent } from "react";
import { CampHeader } from "./components/camp-header";
import { CampDescription } from "./components/camp-description";

export const CampsiteInfo: FunctionComponent = () => {
  return (
    <div>
      <CampHeader region="region" park="park" zone="zone" site="site" logout={() => {}}/>
      <CampDescription description="description about campsite"/>
    </div>
  );
};
