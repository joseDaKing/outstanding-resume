import { 
    Text, 
    View 
}
from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const Title: React.FC = props => {

    return (
        <>
            <Text
            style={{
                fontWeight: 600,
                fontSize: "16pt",
                fontFamily: montserratFont,
            }}>
                {props.children}
            </Text>

            <View
            style={{
                marginBottom: "8pt"
            }}/>
        </>
    );
}