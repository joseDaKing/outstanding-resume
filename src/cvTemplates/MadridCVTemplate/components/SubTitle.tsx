import { Text } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const SubTitle: React.FC = props => {

    const value = 165;

    return (
        <Text
        style={{
            fontWeight: 500,
            fontSize: "9pt",
            color: `rgb(${value}, ${value}, ${value})`,
            fontFamily: montserratFont,
        }}>
            {props.children}
        </Text>
    );
}