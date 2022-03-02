import React from "react";

import { ThemedCSS } from "stitches";



export interface CSSProps {
    css?: ThemedCSS;
}

export interface IconProps {
    startIcon?: React.ComponentType<any>;
    endIcon?: React.ComponentType<any>;
}