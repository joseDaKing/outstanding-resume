import { Text, View } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";

import { DatePickerRangeState } from "components/form";

import { calendarStateToStr } from "cvTemplates/MadridCVTemplate/helpers";

import { mergeText } from "helpers";



export const Date: React.FC<DatePickerRangeState> = props => {

    return (
        <>
            <View
            style={{
                marginTop: "4pt"
            }}/>

            <Text
            style={{
                fontFamily: montserratFont,
                fontSize: "10pt",
                fontWeight: 500,
                opacity: 0.4
            }}>
                {mergeText(
                    " - ",
                    calendarStateToStr(props.start),
                    calendarStateToStr(props.end)
                )}
            </Text>

            <View
            style={{
                marginTop: "6pt"
            }}/>
        </>
    );
}