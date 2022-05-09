import { Text } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



const MyText: React.FC = props => {

    return (
        <Text
        style={{
            fontWeight: 400,
            fontSize: "12pt",
            fontFamily: montserratFont,
        }}>
            {props.children}
        </Text>
    );
}

export {
    MyText as Text
}