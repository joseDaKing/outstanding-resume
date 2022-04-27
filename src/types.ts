import React from "react";

import { ThemedCSS } from "stitches";



export interface CSSProps {
    css?: ThemedCSS;
}

export interface IconProps {
    StartIcon?: React.ComponentType<any>;
    EndIcon?: React.ComponentType<any>;
}

export type AsChildProps = {
    asChild?: boolean;
}