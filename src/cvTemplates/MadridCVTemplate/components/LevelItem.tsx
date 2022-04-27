import { View } from "@react-pdf/renderer";

import { Text } from "./Text";



type LevelItemProps = {
    level: number;
    maxLevel: number;
    hideLevel?: boolean;
}

export const LevelItem: React.FC<LevelItemProps> = props => {

    const value = 235;

    console.log(100 * props.level / props.maxLevel);

    return (
        <View
        wrap={false}>
            {props.children &&
            <Text>
                {props.children}
            </Text>}

            {!props.hideLevel &&
            <>
                <View
                style={{
                    marginTop: "8pt"
                }}/>

                <View
                style={{
                    width: "100%",
                    height: "4pt",
                    position: "relative",
                    backgroundColor: `rgb(${value},${value},${value})`,
                }}>
                    <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        width: `${100 * props.level / props.maxLevel}%`,
                        right: 0,
                        left: 0,
                        top: 0,
                        bottom: 0
                    }}/>
                </View>
            </>}
        </View>
    );
}