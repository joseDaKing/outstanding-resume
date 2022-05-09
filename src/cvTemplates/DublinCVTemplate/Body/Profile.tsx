import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { Text, Title } from "./components";



export const Profile: React.FC<RootState["professionalExperience"]> = state => {

    return (
        <>
            {!!state.description &&
            <View
            wrap={false}>
                <Title>
                    {state.sectionTitle}
                </Title>

                <Text>
                    {state.description}
                </Text>
            </View>}
        </>
    );
}