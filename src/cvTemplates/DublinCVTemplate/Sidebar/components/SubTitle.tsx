import { Text } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const SubTitle: React.FC = props => {

    return (
        <Text
        style={{
            letterSpacing: "1pt",
            fontSize: "10pt",
            color: "white",
            fontFamily: montserratFont
        }}>
            {props.children}
        </Text>
    );
}