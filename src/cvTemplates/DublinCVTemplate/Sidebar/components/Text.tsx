import { Text } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



const MyText: React.FC = props => {

    return (
        <Text
        style={{
            fontSize: "9pt",
            color: "white",
            fontFamily: montserratFont
        }}>
            {props.children}
        </Text>
    );
}

export {
    MyText as Text
}