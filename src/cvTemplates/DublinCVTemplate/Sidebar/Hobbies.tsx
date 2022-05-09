import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { 
    Text,
    SectionTitle
}
from "./components";



export const Hobbies: React.FC<RootState["hobbies"]> = state => {

    const space = (
        <View
        style={{
            marginTop: "2pt"
        }}/>
    );

    return (
        <>
            {!!state.description &&
            <View
            wrap={false}>
                <View
                style={{
                    marginTop: "22pt"
                }}/>

                <SectionTitle>
                    {state.sectionTitle}
                </SectionTitle>

                {!!state.description &&
                <>
                    {space}
                    <Text>
                        {state.description}
                    </Text>
                </>}

            </View>}
        </>
    );
}