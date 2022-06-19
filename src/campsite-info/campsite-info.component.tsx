import React, { FunctionComponent } from "react";
import { CampHeader } from "./components/camp-header";

export const CampsiteInfo: FunctionComponent = () => {
    return <CampHeader region="region" park="park" zone="zone" site="site" logout={() => {}}/>; // eslint-disable-line @typescript-eslint/no-empty-function
};
