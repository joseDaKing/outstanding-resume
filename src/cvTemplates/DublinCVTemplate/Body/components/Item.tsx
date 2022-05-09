import { Text } from "./Text";

import { SubTitle } from "./SubTitle";

import { Date } from "./Date";

import { View } from "@react-pdf/renderer";

import { DatePickerRangeState } from "components/form";



export type ItemProps = {
    title: string;
    text?: string;
    date?: DatePickerRangeState;
};

export const Item: React.FC<ItemProps> = props => {

    return (
        <View
        wrap={false}>
            <SubTitle>
                {props.title}
            </SubTitle>

            {!!props.date &&
            <Date
            {...props.date}/>}

            {!!props.text &&
            <Text>
                {props.text}
            </Text>}
        </View>
    );
}