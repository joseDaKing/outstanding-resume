import { Text } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const Title: React.FC = props => {

    return (
        <Text
        style={{
            letterSpacing: "0.3pt",
            color: "white",
            fontSize: "16pt",
            fontWeight: 600,
            fontFamily: montserratFont
        }}>
            {props.children}
        </Text>
    );
}