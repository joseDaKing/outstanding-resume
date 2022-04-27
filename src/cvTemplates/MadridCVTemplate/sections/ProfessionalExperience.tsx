import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { SectionTitle, Text } from "../components";



export const ProfessionalExperience: React.FC<RootState["professionalExperience"]> = state => {

    return (
        <>
            {!!state.description &&
            <View
            wrap={false}
            style={{
                paddingVertical: "17pt",
            }}>
                {!!state.sectionTitle &&
                <SectionTitle>
                    {state.sectionTitle}
                </SectionTitle>}

                {!!state.description &&
                <Text>
                    {state.description}
                </Text>}
            </View>}
        </>
    );
}