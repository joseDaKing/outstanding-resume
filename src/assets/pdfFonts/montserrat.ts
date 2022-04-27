import { Font } from "@react-pdf/renderer";

import {
    MontserratBold,
    MontserratExtraBold,
    MontserratExtraLight,
    MontserratLight,
    MontserratMedium,
    MontserratRegular,
    MontserratThin
} 
from "../fonts";



export const montserratFont = "Montserrat";

Font.register({
    family: montserratFont, 
    fonts: [
        {
            src: MontserratThin,
            fontWeight: 100
        },
        {
            src: MontserratExtraLight,
            fontWeight: 200
        },
        {
            src: MontserratLight,
            fontWeight: 300
        },
        {
            src: MontserratRegular,
            fontWeight: 400
        },
        {
            src: MontserratMedium,
            fontWeight: 500
        },
        {
            src: MontserratBold,
            fontWeight: 600
        },
        {
            src: MontserratExtraBold,
            fontWeight: 700
        },
    ]
});