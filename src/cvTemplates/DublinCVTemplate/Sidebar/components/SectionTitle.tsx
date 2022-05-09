import { Text, View } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const SectionTitle: React.FC = props => {

    return (
        <>
            <Text
            style={{
                fontSize: "11pt",
                fontWeight: 600,
                color: "white",
                fontFamily: montserratFont
            }}>
                {props.children}
            </Text>

            <View
            style={{
                marginBottom: "3pt"
            }}/>
        </>
    );
}