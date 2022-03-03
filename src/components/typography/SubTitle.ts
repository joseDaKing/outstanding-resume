import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { Title } from "./Title";



export const SubTitle = stitches.styled(Title, {
    fontFamily: "$primary",
    fontWeight: 600,
    capSize: {
        fontSize: 22,
        fontMetrics
    }
});

SubTitle.displayName = "SubTitle";