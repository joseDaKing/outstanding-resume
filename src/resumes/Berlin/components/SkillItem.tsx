import React from "react";

import { ISkillItem } from "../../../store/slices/orderableSections/required/skill";

import { Text } from "./Text";

import { View } from "@react-pdf/renderer";

import { theme } from "../theme";

export const SkillItem: React.FC<ISkillItem> = ({ name, level }) => {

    return (
        <View>
            <Text>
                {name}
            </Text>

            <View
            style={{
                height: 4,
                width: `${(level + 1) * 2 * 10}%`,
                marginTop: 8,
                backgroundColor: theme.colors.dark
            }}/>
        </View>
    );
}