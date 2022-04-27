import { SubTitle } from "./SubTitle";

import { Title } from "./Title";

import { Text } from "./Text";

import { View } from "@react-pdf/renderer";



type ItemProps = {
    index: number;
    title?: string;
    subTitle?: string;
}

export const Item: React.FC<ItemProps> = props => {

    return (
        <View
        wrap={false}
        style={{
            marginTop: props.index !== 0 ? "16pt" : undefined
        }}>
            {!!props.title &&
            <Title>
                {props.title}
            </Title>}

            {!!props.subTitle &&
            <>
                <View
                style={{
                    marginBottom: "4pt"
                }}/>
                
                <SubTitle>
                    {props.subTitle}
                </SubTitle>
            </>}

            {!!props.children &&
            <>
                <View
                style={{
                    marginTop: "8pt"
                }}/>

                <Text>
                    {props.children}
                </Text>
            </>}
        </View>
    );
}