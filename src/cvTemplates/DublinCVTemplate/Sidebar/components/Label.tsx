import { Text } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const Label: React.FC = props => {

    return (
        <Text
        style={{
            fontSize: "9pt",
            color: "white",
            opacity: 0.5,
            fontFamily: montserratFont
        }}>
            {typeof props.children === "string" ? props.children.toUpperCase() : props.children}
        </Text>
    );
}