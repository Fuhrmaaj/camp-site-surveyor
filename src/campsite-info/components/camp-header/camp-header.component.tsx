import React, { FunctionComponent } from "react";
import type { CampHeaderProps } from ".";
import Button from "@mui/material/Button";

export const CampHeader: FunctionComponent<CampHeaderProps> = ({ region, park, zone, site, logout }) => {
    return (
        <nav>
            <div className="breadcrumbs">{region}/{park}/{zone}/{site}</div>
            <Button onClick={logout}>Logout</Button>
        </nav>
    );
};
