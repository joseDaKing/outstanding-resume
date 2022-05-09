import { Text, View } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const SubTitle: React.FC = props => {

    return (
        <>
            <Text
            style={{
                fontSize: "13pt",
                fontWeight: 500,
                fontFamily: montserratFont,
            }}>
                {props.children}
            </Text>

            <View
            style={{
                marginBottom: "2pt"
            }}/>
        </>
    );
}