import { View } from "@react-pdf/renderer";

import { Text } from "./Text";



type LevelProps = {
    label: string;
    maxLevel: number;
    level: number;
    hideLevel?: boolean;
}

export const Level: React.FC<LevelProps> = props => {

    return (
        <View
        wrap={false}>

            <View
            style={{
                marginTop: "8pt"
            }}/>

            <Text>
                {props.label}
            </Text>

            {props.level !== 0 &&
            !props.hideLevel &&
            <>
                <View
                style={{
                    marginTop: "3pt"
                }}/>

                <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexGrow: 0,
                    flexShrink: 1,
                    flexWrap: "nowrap"
                }}>
                    <View
                    style={{
                        width: "100%",
                        height: "2pt",
                        position: "relative"
                    }}>
                        <View
                        style={{
                            zIndex: 0,
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: "white",
                            opacity: 0.35
                        }}/>

                        <View
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            width: `${Math.round(props.level/props.maxLevel * 100)}%`,
                            backgroundColor: "white",
                        }}/>
                    </View>
                </View>
            </>}
        </View>
    );
}